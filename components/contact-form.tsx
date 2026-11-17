'use client'

import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { enquirySubjects } from '@/lib/enquiry'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type FieldErrors = Record<string, string>

const labelClass = 'block text-[0.66rem] font-bold uppercase tracking-[0.18em] text-walnut'
const fieldClass =
  'mt-2 w-full border border-forest/20 bg-white px-4 py-3 text-[0.95rem] text-charcoal transition-colors duration-200 placeholder:text-walnut/40 focus:border-forest focus:outline-none disabled:cursor-not-allowed disabled:border-forest/10 disabled:bg-forest/[0.03] disabled:text-walnut/45'
const errorClass = 'mt-2 flex items-center gap-1.5 text-[0.78rem] text-[#8a3b2e]'

export function ContactForm({ accepting }: { accepting: boolean }) {
  const startedAt = useRef<number>(Date.now())
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [notice, setNotice] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!accepting || status === 'submitting') return

    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
      consent: data.get('consent') === 'on',
      website: String(data.get('website') ?? ''),
      startedAt: startedAt.current,
    }

    setStatus('submitting')
    setErrors({})
    setNotice('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => ({}))) as {
        message?: string
        errors?: FieldErrors
      }

      if (response.ok) {
        form.reset()
        startedAt.current = Date.now()
        setStatus('success')
        setNotice(result.message ?? 'Thank you. Your enquiry has been sent.')
        return
      }

      setStatus('error')
      setErrors(result.errors ?? {})
      setNotice(result.message ?? 'The enquiry could not be sent. Please try again.')
    } catch {
      setStatus('error')
      setNotice(
        'The enquiry could not be sent. Please check your connection and try again.',
      )
    }
  }

  const submitting = status === 'submitting'
  const disabled = !accepting || submitting

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={disabled}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id="name-error" role="alert" className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={disabled}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="font-normal normal-case tracking-normal text-walnut/45">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={disabled}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id="phone-error" role="alert" className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Enquiry about
          </label>
          <select
            id="subject"
            name="subject"
            required
            disabled={disabled}
            defaultValue=""
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            className={`${fieldClass} appearance-none`}
          >
            <option value="" disabled>
              Please select
            </option>
            {enquirySubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject ? (
            <p id="subject-error" role="alert" className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={disabled}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className={errorClass}>
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="consent" className="flex items-start gap-3 text-[0.86rem] leading-relaxed text-walnut/80">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            disabled={disabled}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            className="mt-1 h-4 w-4 shrink-0 rounded-none border border-forest/40 accent-forest"
          />
          I agree that the foundation may use the details above to respond to this enquiry.
        </label>
        {errors.consent ? (
          <p id="consent-error" role="alert" className={errorClass}>
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 border-t border-forest/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-[0.75rem] leading-relaxed text-walnut/55">
          {accepting
            ? 'Your enquiry is sent by email to the foundation and is not stored on this website.'
            : 'Submissions are disabled until an official enquiries inbox is configured.'}
        </p>
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center justify-center gap-2.5 bg-forest px-7 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ivory transition-colors duration-200 hover:bg-walnut disabled:cursor-not-allowed disabled:bg-forest/25 disabled:text-forest/50"
        >
          {submitting ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : accepting ? (
            'Send enquiry'
          ) : (
            'Submissions not yet open'
          )}
        </button>
      </div>

      <div aria-live="polite" className="min-h-0">
        {status === 'success' && notice ? (
          <p className="flex items-start gap-2.5 border border-forest/20 bg-white px-5 py-4 text-[0.85rem] leading-relaxed text-forest">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
            {notice}
          </p>
        ) : null}
        {status === 'error' && notice ? (
          <p className="flex items-start gap-2.5 border border-[#8a3b2e]/25 bg-[#8a3b2e]/5 px-5 py-4 text-[0.85rem] leading-relaxed text-[#8a3b2e]">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {notice}
          </p>
        ) : null}
      </div>
    </form>
  )
}
