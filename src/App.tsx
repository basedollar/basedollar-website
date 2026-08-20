import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Lore from './components/Lore'
import AxoMama from './components/AxoMama'
import Footer from './components/Footer'
import BorderStrip from './components/BorderStrip'
import BlogPage from './pages/blog/BlogPage'
import BlogPostPage from './pages/blog/BlogPostPage'
import { Analytics } from '@vercel/analytics/react'

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Lore />
      <AxoMama />
      <BorderStrip />
      <Footer />
    </>
  )
}

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <BorderStrip />
      <Footer />
    </>
  )
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const blogPostMatch = pathname.match(/^\/blog\/([^/]+)$/)

  return (
    <>
      {pathname === '/blog' ? (
        <BlogLayout>
          <BlogPage />
        </BlogLayout>
      ) : blogPostMatch ? (
        <BlogLayout>
          <BlogPostPage slug={decodeURIComponent(blogPostMatch[1])} />
        </BlogLayout>
      ) : (
        <LandingPage />
      )}
      <Analytics />
    </>
  )
}

export default App
