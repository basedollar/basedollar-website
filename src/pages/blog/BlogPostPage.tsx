import { useEffect, useMemo, useState } from 'react'
import { getBlogPost, renderMarkdown } from './blogData'
import './blog.css'

function ArticleCover({ image }: { image?: string }) {
  const [failed, setFailed] = useState(false)

  if (!image || failed) return null

  return (
    <div className="blog-article-cover">
      <img src={image} alt="" onError={() => setFailed(true)} />
    </div>
  )
}

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = getBlogPost(slug)
  const html = useMemo(() => (post ? renderMarkdown(post.content) : ''), [post])

  useEffect(() => {
    document.title = post ? `${post.title} | Base Dollar` : 'Article not found | Base Dollar'
    window.scrollTo(0, 0)
  }, [post])

  if (!post) {
    return (
      <main className="blog-not-found">
        <div className="blog-shell blog-not-found-inner">
          <p className="blog-eyebrow">404</p>
          <h1>That article wandered off.</h1>
          <p>The page you requested does not exist or may have moved.</p>
          <a className="blog-button" href="/blog">Back to the blog</a>
        </div>
      </main>
    )
  }

  return (
    <main className="blog-article-page">
      <div className="blog-shell blog-article-shell">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <a href="/blog">← All articles</a>
        </nav>

        <article>
          <header className="blog-article-header">
            <h1>{post.title}</h1>
            <div className="blog-article-meta">
              <span>By {post.author}</span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.date.toISOString()}>{post.dateLabel}</time>
            </div>
          </header>

          <ArticleCover image={post.image} />

          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div className="blog-article-end">
          <span>End of article</span>
          <a href="/blog">Explore more posts →</a>
        </div>
      </div>
    </main>
  )
}
