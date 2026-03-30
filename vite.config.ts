import 'dotenv/config'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Local dev API handler — mirrors the Vercel serverless function
function apiDevPlugin(): Plugin {
  return {
    name: 'api-dev',
    configureServer(server) {
      server.middlewares.use('/api/subscribe', async (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        for await (const chunk of req) body += chunk

        try {
          const { email: rawEmail } = JSON.parse(body)
          const email = rawEmail?.trim()?.toLowerCase()

          if (!email || !email.includes('@') || !email.includes('.')) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Invalid email address' }))
            return
          }

          if (email.length > 320) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Email too long' }))
            return
          }

          const databaseUrl = process.env.DATABASE_URL
          if (!databaseUrl) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'DATABASE_URL not set' }))
            return
          }

          const { neon } = await import('@neondatabase/serverless')
          const sql = neon(databaseUrl)

          await sql`
            CREATE TABLE IF NOT EXISTS emails (
              id SERIAL PRIMARY KEY,
              email TEXT UNIQUE NOT NULL,
              created_at TIMESTAMPTZ DEFAULT NOW()
            )
          `

          await sql`
            INSERT INTO emails (email)
            VALUES (${email})
            ON CONFLICT (email) DO NOTHING
          `

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ success: true }))
        } catch (err) {
          console.error('Subscribe error:', err)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Internal server error' }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), apiDevPlugin()],
  server: {
    port: 8000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port: 8000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
