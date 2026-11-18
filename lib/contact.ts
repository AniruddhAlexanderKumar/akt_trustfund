import { enquirySubjects, type EnquirySubject } from './enquiry'

export type Enquiry = {
  name: string
  email: string
  phone: string
  subject: EnquirySubject
  message: string
  consent: true
}

export type ValidationResult =
  | { ok: true; value: Enquiry }
  | { ok: false; errors: Record<string, string> }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const phonePattern = /^[0-9+()\-\s]{6,24}$/

/** True only when every delivery variable is present. */
export function isContactConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.RESEND_FROM_EMAIL,
  )
}

export function validateEnquiry(payload: unknown): ValidationResult {
  if (typeof payload !== 'object' || payload === null) {
    return { ok: false, errors: { form: 'The request could not be read. Please try again.' } }
  }

  const data = payload as Record<string, unknown>
  const read = (key: string) => (typeof data[key] === 'string' ? (data[key] as string).trim() : '')

  const name = read('name')
  const email = read('email')
  const phone = read('phone')
  const subject = read('subject')
  const message = read('message')
  const honeypot = read('website')
  const startedAt = typeof data.startedAt === 'number' ? data.startedAt : 0

  const errors: Record<string, string> = {}

  if (honeypot) errors.form = 'This message could not be submitted.'
  if (name.length < 2 || name.length > 80) {
    errors.name = 'Please enter your full name (2 to 80 characters).'
  }
  if (!emailPattern.test(email) || email.length > 160) {
    errors.email = 'Please enter a valid email address.'
  }
  if (phone && !phonePattern.test(phone)) {
    errors.phone = 'Please enter a valid phone number, or leave this field blank.'
  }
  if (!enquirySubjects.includes(subject as EnquirySubject)) {
    errors.subject = 'Please choose what your enquiry is about.'
  }
  if (message.length < 20) {
    errors.message = 'Please add a little more detail (at least 20 characters).'
  } else if (message.length > 2000) {
    errors.message = 'Please keep your message under 2000 characters.'
  }
  if (data.consent !== true) {
    errors.consent = 'Please confirm that you may be contacted about this enquiry.'
  }

  const elapsed = Date.now() - startedAt
  if (!startedAt || elapsed < 2500 || elapsed > 1000 * 60 * 60 * 6) {
    errors.form = 'Please take a moment and submit the form again.'
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors }

  return {
    ok: true,
    value: { name, email, phone, subject: subject as EnquirySubject, message, consent: true },
  }
}
