import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const email = req.body?.email?.trim()?.toLowerCase()

    if (!email || !email.includes('@') || !email.includes('.')) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    if (email.length > 320) {
      return res.status(400).json({ error: 'Email too long' })
    }

    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      console.error('DATABASE_URL is not set')
      return res.status(500).json({ error: 'Server configuration error' })
    }

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

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
