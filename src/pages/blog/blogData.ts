import { marked } from 'marked'

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: Date
  dateLabel: string
  image?: string
  content: string
  excerpt: string
}

const markdownFiles = import.meta.glob('./blogs/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>

const LOCAL_BLOG_IMAGE_SOURCE =
  'raw.githubusercontent.com/ethcatherders/ech-blog/refs/heads/main/blogs/images/'

function cleanFrontmatterValue(value: string) {
  const trimmed = value.trim()

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }

  return trimmed
}

function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day, 12)
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

function resolveBlogImage(source?: string) {
  if (!source) return undefined

  if (source.includes(LOCAL_BLOG_IMAGE_SOURCE)) {
    const filename = decodeURIComponent(source.split('/').at(-1) ?? '')
    return `/blog/images/${encodeURIComponent(filename)}`
  }

  return source
}

function createExcerpt(markdown: string) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_>#~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180)
}

function parsePost(path: string, source: string): BlogPost {
  const frontmatterMatch = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)

  if (!frontmatterMatch) {
    throw new Error(`Missing frontmatter in ${path}`)
  }

  const metadata = Object.fromEntries(
    frontmatterMatch[1]
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(':')
        return [
          line.slice(0, separator).trim(),
          cleanFrontmatterValue(line.slice(separator + 1)),
        ]
      }),
  )

  if (!metadata.title || !metadata.author || !metadata.date) {
    throw new Error(`Invalid frontmatter in ${path}`)
  }

  const date = parseDate(metadata.date)
  const content = frontmatterMatch[2].trim()

  return {
    slug: path.split('/').at(-1)?.replace(/\.md$/, '') ?? '',
    title: metadata.title,
    author: metadata.author,
    date,
    dateLabel: formatDate(date),
    image: resolveBlogImage(metadata.image),
    content,
    excerpt: createExcerpt(content),
  }
}

export const blogPosts = Object.entries(markdownFiles)
  .map(([path, source]) => parsePost(path, source))
  .sort((a, b) => b.date.getTime() - a.date.getTime())

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug.toLowerCase() === slug.toLowerCase())
}

export function renderMarkdown(markdown: string) {
  const html = marked.parse(markdown, {
    async: false,
    breaks: false,
    gfm: true,
  }) as string

  return html.replace(
    /https:\/\/raw\.githubusercontent\.com\/ethcatherders\/ech-blog\/refs\/heads\/main\/blogs\/images\/([^"')\s]+)/g,
    (_match, filename: string) => `/blog/images/${encodeURIComponent(decodeURIComponent(filename))}`,
  )
}
