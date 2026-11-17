'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en-IN">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f0e5',
          color: '#242923',
          fontFamily: 'Georgia, "Times New Roman", serif',
          padding: '2rem',
        }}
      >
        <main style={{ maxWidth: '34rem' }}>
          <p
            style={{
              margin: 0,
              fontFamily: 'system-ui, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#78877a',
            }}
          >
            The Late Dr. Anil Kumar Thakur Foundation
          </p>
          <h1 style={{ margin: '1.5rem 0 0', fontSize: '2.25rem', lineHeight: 1.15, color: '#283b35' }}>
            Something went wrong.
          </h1>
          <p style={{ margin: '1.25rem 0 0', fontFamily: 'system-ui, sans-serif', fontSize: '0.95rem', lineHeight: 1.75, color: '#493b32' }}>
            This page could not be displayed. Please try again, or return to the home page.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={reset}
              style={{
                border: 0,
                cursor: 'pointer',
                backgroundColor: '#283b35',
                color: '#f5f0e5',
                padding: '0.9rem 1.6rem',
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                border: '1px solid rgba(40,59,53,0.25)',
                color: '#283b35',
                padding: '0.9rem 1.6rem',
                textDecoration: 'none',
                fontFamily: 'system-ui, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Home
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
