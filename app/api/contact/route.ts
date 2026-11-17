import { NextResponse } from 'next/server'
import { isContactConfigured, validateEnquiry } from '@/lib/contact'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const WINDOW_MS = 10 * 60 * 1000
const MAX_ATTEMPTS = 5
const attempts = new Map<string, number[]>()

function isRateLimited(clientId: string): boolean {
  const now = Date.now()
  const recent = (attempts.get(clientId) ?? []).filter((time) => now - time < WINDOW_MS)

  if (recent.length >= MAX_ATTEMPTS) {
    attempts.set(clientId, recent)
    return true
  }

  recent.push(now)
  if (attempts.size > 1000) attempts.clear()
  attempts.set(clientId, recent)
  return false
}

function clientIdentifier(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return request.headers.get('x-real-ip') ?? 'unknown'
}

export async function GET() {
  return NextResponse.json({ accepting: isContactConfigured() })
}

export async function POST(request: Request) {
  if (isRateLimited(clientIdentifier(request))) {
    return NextResponse.json(
      { ok: false, message: 'Too many attempts. Please try again in a few minutes.' },
      { status: 429 },
    )
  }

  if (!isContactConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        code: 'NOT_CONFIGURED',
        message: 'Enquiries are not yet being accepted online.',
      },
      { status: 503 },
    )
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, message: 'The request could not be read.' },
      { status: 400 },
    )
  }

  const result = validateEnquiry(payload)
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Please check the highlighted fields and try again.',
        errors: result.errors,
      },
      { status: 422 },
    )
  }

  const enquiry = result.value
  const body = [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    enquiry.phone ? `Phone: ${enquiry.phone}` : null,
    `Subject: ${enquiry.subject}`,
    '',
    enquiry.message,
    '',
    'Submitted through the foundation website enquiry form.',
  ]
    .filter((line) => line !== null)
    .join('\n')

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: enquiry.email,
        subject: `[Website enquiry] ${enquiry.subject} — ${enquiry.name}`,
        text: body,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: 'DELIVERY_FAILED',
          message: 'The enquiry could not be delivered. Please try again later.',
        },
        { status: 502 },
      )
    }
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: 'DELIVERY_FAILED',
        message: 'The enquiry could not be delivered. Please try again later.',
      },
      { status: 502 },
    )
  }

  return NextResponse.json(
    { ok: true, message: 'Thank you. Your enquiry has been sent to the foundation.' },
    { status: 201 },
  )
}
