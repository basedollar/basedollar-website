#!/usr/bin/env bun

import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import matter from "gray-matter";
import { z } from "zod";

const postsDirectory = path.join(process.cwd(), "src/pages/blog/blogs");

const frontmatterSchema = z
  .object({
    title: z.string().min(1),
    author: z.string().min(1),
    date: z.coerce.date(),
    image: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!value || value.startsWith("/")) return true;

          try {
            new URL(value);
            return true;
          } catch {
            return false;
          }
        },
        { message: "Image must be a valid URL or an absolute path" },
      ),
  })
  .passthrough();

class PostNotFoundError extends Error {
  filename: string;

  constructor(filename: string) {
    super(`Post "${filename}" not found`);
    this.name = "PostNotFoundError";
    this.filename = filename;
  }
}

class FrontmatterValidationError extends Error {
  filename: string;
  override cause: z.ZodError;

  constructor(filename: string, cause: z.ZodError) {
    super(`Invalid frontmatter in "${filename}"`);
    this.name = "FrontmatterValidationError";
    this.filename = filename;
    this.cause = cause;
  }
}

function readPostFromFile(filename: string) {
  const filePath = path.join(postsDirectory, filename);

  let source: string;
  try {
    source = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new PostNotFoundError(filename);
    }

    throw error;
  }

  const parsed = matter(source);
  const validation = frontmatterSchema.safeParse(parsed.data);

  if (!validation.success) {
    throw new FrontmatterValidationError(filename, validation.error);
  }

  return {
    frontmatter: validation.data,
    content: parsed.content,
  };
}

async function findMarkdownFiles(directory: string, prefix = ""): Promise<string[]> {
  const entries = await fs.promises.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const relativePath = path.join(prefix, entry.name);

      if (entry.isDirectory()) {
        return findMarkdownFiles(path.join(directory, entry.name), relativePath);
      }

      return entry.isFile() && entry.name.endsWith(".md") ? [relativePath] : [];
    }),
  );

  return files.flat().sort();
}

/** Validates every Markdown post used by the Vite blog. */
async function validateAllPosts() {
  console.log(chalk.blue("🔍 Validating all blog posts..."));

  if (!fs.existsSync(postsDirectory)) {
    console.error(
      chalk.red(`❌ Error: Blog posts directory not found at ${postsDirectory}`),
    );
    process.exit(1);
  }

  const markdownFiles = await findMarkdownFiles(postsDirectory);

  if (markdownFiles.length === 0) {
    console.warn(
      chalk.yellow("⚠️ Warning: No markdown files found in the blog directory"),
    );
    return;
  }

  console.log(
    chalk.blue(`Found ${markdownFiles.length} blog post(s) to validate`),
  );

  let validCount = 0;
  let hasErrors = false;

  for (const filename of markdownFiles) {
    try {
      readPostFromFile(filename);
      validCount += 1;
    } catch (error) {
      hasErrors = true;

      if (error instanceof FrontmatterValidationError) {
        console.error(
          chalk.red(`❌ ${filename} - Invalid frontmatter:`),
          error.cause.issues
            .map((issue) =>
              `\n   - ${issue.path.join(".") || "frontmatter"}: ${issue.message}`
            )
            .join(""),
        );
      } else if (error instanceof PostNotFoundError) {
        console.error(chalk.red(`❌ ${filename} - Post not found`));
      } else {
        throw error;
      }
    }
  }

  console.log(
    chalk.blue(
      `\n📊 Validation summary: ${validCount}/${markdownFiles.length} posts valid`,
    ),
  );

  if (hasErrors) {
    console.error(
      chalk.red("\n❌ Validation failed. Please fix the errors above."),
    );
    process.exit(1);
  }

  console.log(chalk.green("\n✅ All blog posts are valid!"));
}

validateAllPosts().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(chalk.red(`\n❌ Unexpected error: ${message}`));
  process.exit(1);
});
