import { useEffect, useState } from 'react'
import type { BlogPost } from './blogData'
import { blogPosts } from './blogData'
import './blog.css'

function BlogImage({ post, eager = false }: { post: BlogPost; eager?: boolean }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`blog-card-image${failed || !post.image ? ' blog-card-image-fallback' : ''}`}>
      {!failed && post.image && (
        <img
          src={post.image}
          alt=""
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
        />
      )}
      {(failed || !post.image) && <img src="/images/logo.png" alt="" />}
    </div>
  )
}

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`blog-card${featured ? ' blog-card-featured' : ''}`}>
      <a href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
        <BlogImage post={post} eager={featured} />
        <div className="blog-card-content">
          <p className="blog-card-date">{post.dateLabel}</p>
          <h3>{post.title}</h3>
          {featured && <p className="blog-card-excerpt">{post.excerpt}…</p>}
          <div className="blog-card-footer">
            <span>{post.author}</span>
            <span className="blog-read-more" aria-hidden="true">Read article →</span>
          </div>
        </div>
      </a>
    </article>
  )
}

export default function BlogPage() {
  const [query, setQuery] = useState('')
  const featuredPosts = blogPosts.slice(0, 4)

  useEffect(() => {
    document.title = 'Blog | Base Dollar'
    window.scrollTo(0, 0)
  }, [])

  const normalizedQuery = query.trim().toLowerCase()
  const filteredPosts = normalizedQuery
    ? blogPosts.filter((post) =>
        [post.title, post.author, post.excerpt].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        ),
      )
    : blogPosts.slice(4)

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-shell blog-hero-inner">
          <h1>Base Dollar Blog</h1>
          <p className="blog-hero-copy">
            Annoucements, updates and other writings about Base Dollar.
          </p>
        </div>
      </section>

      <div className="blog-shell blog-content">
        <section aria-labelledby="latest-posts">
          <div className="blog-section-heading">
            <div>
              <h2 id="latest-posts">Latest posts</h2>
            </div>
            <span>{blogPosts.length} articles</span>
          </div>

          <div className="blog-featured-grid">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} featured />
            ))}
          </div>
        </section>

        {blogPosts.length > 4 && (
          <section className="blog-archive" aria-labelledby="all-posts">
            <div className="blog-section-heading blog-archive-heading">
              <div>
                <p className="blog-kicker">Explore the archive</p>
                <h2 id="all-posts">All posts</h2>
              </div>
              <label className="blog-search">
                <span className="sr-only">Search articles</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles"
                />
              </label>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="blog-archive-grid">
                {filteredPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="blog-empty">
                <h3>No articles found</h3>
                <p>Try a different title, topic, or author.</p>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  )
}
