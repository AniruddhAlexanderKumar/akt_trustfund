import rawLedger from '@/data/first-initiative/ledger.json'
import { initiative } from '@/lib/initiative'

export type LedgerEntryKind = 'contribution' | 'expenditure'

export type LedgerEvidence = { label: string; href: string }

export type LedgerEntry = {
  reference: string
  date: string
  verifiedOn: string
  kind: LedgerEntryKind
  label: string
  amount: number
  note?: string
  evidence?: LedgerEvidence
  balance: number
}

export type LedgerTotals = {
  contributed: number
  spent: number
  balance: number
  remainingTarget: number
}

export type Ledger = {
  entries: LedgerEntry[]
  totals: LedgerTotals
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const REFERENCE_PATTERN = /^[A-Z]{2,5}-\d{2,4}$/

function warn(message: string) {
  // Server-side only: helps the administrator notice a malformed entry without
  // ever printing financial or personal detail.
  console.warn(`[ledger] ${message}`)
}

function isValidDate(value: unknown): value is string {
  if (typeof value !== 'string' || !DATE_PATTERN.test(value)) return false
  return !Number.isNaN(new Date(`${value}T00:00:00Z`).getTime())
}

/**
 * Rejects anything that could carry personal data into the public ledger:
 * email addresses, UPI handles, long digit runs (telephone numbers, account or
 * transaction identifiers) and links.
 */
function isPublicText(value: unknown, maxLength: number): value is string {
  if (typeof value !== 'string') return false
  const text = value.trim()
  if (text.length === 0 || text.length > maxLength) return false
  if (text.includes('@')) return false
  if (/\d{8,}/.test(text)) return false
  if (/https?:\/\//i.test(text)) return false
  return true
}

function parseEvidence(value: unknown): LedgerEvidence | undefined {
  if (value === undefined || value === null) return undefined
  if (typeof value !== 'object') return undefined

  const candidate = value as Record<string, unknown>
  const label = candidate.label
  const href = candidate.href

  if (!isPublicText(label, 90)) return undefined
  if (typeof href !== 'string') return undefined
  if (!href.startsWith('/documents/') || href.includes('..')) return undefined

  return { label, href }
}

function parseEntry(value: unknown, index: number): LedgerEntry | null {
  if (typeof value !== 'object' || value === null) {
    warn(`entry ${index + 1} is not an object and was omitted`)
    return null
  }

  const entry = value as Record<string, unknown>

  if (entry.verified !== true || !isValidDate(entry.verifiedOn)) {
    warn(`entry ${index + 1} is unverified and was omitted`)
    return null
  }

  if (!isValidDate(entry.date)) {
    warn(`entry ${index + 1} has an invalid date and was omitted`)
    return null
  }

  const reference = typeof entry.reference === 'string' ? entry.reference.trim() : ''
  if (!REFERENCE_PATTERN.test(reference)) {
    warn(`entry ${index + 1} has an invalid reference and was omitted`)
    return null
  }

  if (!isPublicText(entry.label, 120)) {
    warn(`entry ${reference} has a label that may contain personal data and was omitted`)
    return null
  }

  if (entry.kind !== 'contribution' && entry.kind !== 'expenditure') {
    warn(`entry ${reference} has an invalid kind and was omitted`)
    return null
  }

  const amount = entry.amount
  if (typeof amount !== 'number' || !Number.isInteger(amount) || amount <= 0) {
    warn(`entry ${reference} has an invalid amount and was omitted`)
    return null
  }

  let note: string | undefined
  if (entry.note !== undefined && entry.note !== null) {
    if (!isPublicText(entry.note, 220)) {
      warn(`entry ${reference} has a note that may contain personal data and was omitted`)
      return null
    }
    note = entry.note
  }

  return {
    reference,
    date: entry.date,
    verifiedOn: entry.verifiedOn,
    kind: entry.kind,
    label: entry.label,
    amount,
    note,
    evidence: parseEvidence(entry.evidence),
    balance: 0,
  }
}

function buildLedger(raw: unknown): Ledger {
  const entries: LedgerEntry[] = []

  if (raw && typeof raw === 'object') {
    const data = raw as Record<string, unknown>

    if (Array.isArray(data.entries)) {
      data.entries.forEach((value, index) => {
        const parsed = parseEntry(value, index)
        if (parsed) entries.push(parsed)
      })
    }
  }

  entries.sort((a, b) => {
    if (a.date === b.date) return a.reference.localeCompare(b.reference)
    return a.date.localeCompare(b.date)
  })

  let contributed = 0
  let spent = 0

  for (const entry of entries) {
    if (entry.kind === 'contribution') contributed += entry.amount
    else spent += entry.amount
    entry.balance = contributed - spent
  }

  return {
    entries,
    totals: {
      contributed,
      spent,
      balance: contributed - spent,
      remainingTarget: Math.max(0, initiative.targetAmount - contributed),
    },
  }
}

/** Verified, anonymised ledger data. Everything shown publicly comes from here. */
export const ledger: Ledger = buildLedger(rawLedger as unknown)
