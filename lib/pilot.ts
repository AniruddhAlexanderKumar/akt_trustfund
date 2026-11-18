/**
 * Content for the foundation's first proposed initiative.
 *
 * Financial figures shown to the public are never defined here — they are
 * derived from `data/pilot-001/ledger.json` by `lib/pilot-ledger.ts`. Only the
 * campaign's target, which is a stated intention, lives in this file.
 */

export const pilot = {
  code: 'Pilot 001',
  eyebrow: 'Memorial scholarship — Pilot 001',
  name: 'Dr. Anil Kumar Thakur Memorial Scholarship — Pilot 001',
  shortName: 'Pilot 001',
  tagline: 'One contribution. One opportunity. A continuing legacy.',
  status: 'Pilot initiative',
  stage: 'In development',
  targetAmount: 5000,

  purpose: 'Educational assistance for one student.',
  focus: 'Jamshedpur, Jharkhand.',
  fundingSource: 'Contributions from family and friends.',

  summary:
    "Pilot 001 is the foundation's first proposed charitable initiative: a ₹5,000 educational sponsorship for one financially disadvantaged student in Jamshedpur. It is being developed quietly, with the family and a small circle of friends, before any wider programme is established.",

  purposeParagraphs: [
    'Pilot 001 is a deliberately modest first step. Rather than announcing a programme the foundation cannot yet sustain, the family is preparing a single educational sponsorship of ₹5,000 for one student in Jamshedpur.',
    'The pilot is being developed in memory of Late Dr. Anil Kumar Thakur, whose life was given to medicine, education and service. Supporting one student is a small continuation of that work, and a way of learning in practice what responsible support requires.',
    'This is an initial, family-and-friends-funded initiative. It is not an established public fundraising programme, and nothing on this page is an invitation to transfer funds through this website.',
  ],

  positioning:
    'Before building an institution, we begin by continuing a legacy. The first Medical Scholars initiative is a small step towards making education more accessible to students who need the opportunity.',

  // The fundraising target is rendered from `targetAmount` so it is formatted,
  // never typed twice.
  facts: [
    { label: 'Purpose', value: 'Educational assistance for one student' },
    { label: 'Geographic focus', value: 'Jamshedpur, Jharkhand' },
    { label: 'Funding source', value: 'Contributions from family and friends' },
    { label: 'Programme status', value: 'Pilot initiative — in development' },
  ],

  ledgerIntro:
    'Every contribution received and every rupee spent on Pilot 001 is recorded here once it has been verified. The ledger is published in full, and nothing is added to it in advance of a verified transaction.',

  ledgerRules: [
    'Only verified transactions appear in this ledger. An entry is published after it has been matched to a statement or receipt by the adult family administrator.',
    'Donors are identified by anonymised labels such as "Family Contributor 01". No names, telephone numbers, UPI identifiers, bank details or transaction identifiers are published.',
    'Supporting documents are published only with private information redacted.',
    'The running balance is calculated from the entries above it, so the table reconciles to the totals shown beneath it.',
  ],

  criteria: [
    {
      title: 'Financial need',
      body: 'Household circumstances that would otherwise limit a student’s ability to continue their education.',
    },
    {
      title: 'Educational circumstances',
      body: 'A specific, identifiable educational cost that a sponsorship of this size can genuinely help to meet.',
    },
    {
      title: 'Genuine interest in learning',
      body: 'Evidence of engagement, effort and a willingness to make use of the opportunity.',
    },
    {
      title: 'Local preference',
      body: 'Preference for students from Jamshedpur and surrounding communities, consistent with the foundation’s stated geographic focus.',
    },
  ],

  privacy: [
    'No student’s name, photograph, school, address, financial circumstances or personal documents will be published without the consent of their parent or guardian.',
    'Any published account of a scholar will be anonymised and limited to what is needed to report honestly on the use of funds.',
    'A Grade 7 student will never be asked to make an irrevocable commitment to becoming a doctor. Support follows the student’s own choices.',
    'A student or family may withdraw at any time and may ask for previously published anonymised details to be removed.',
  ],

  paymentStatements: [
    'No payment button, QR code, UPI identifier, bank account number or automated collection facility is provided on this website.',
    'Nothing on this page is an offer to collect funds. Contributions are arranged privately between the family and people known to it.',
    'Neither registration as a separate charitable institution nor eligibility for charitable tax deductions is claimed.',
  ],

  notice:
    'Pilot 001 is an independently coordinated, family-and-friends-funded memorial scholarship initiative. It is not a separately registered charitable institution. Financial arrangements are supervised by an adult family member. Contributions are not represented as eligible for charitable tax deductions.',

  impactIntro:
    'No scholarship has been awarded yet, and this page does not claim otherwise. When a payment has actually been made and verified, the following will be published here:',

  impactFields: [
    'The amount contributed, as recorded in the ledger.',
    'The amount used and the educational expense it supported.',
    'The date on which payment was made.',
    'An anonymised account of the outcome for the student.',
    'Supporting evidence, with personal information removed.',
  ],
} as const

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

/** Formats a whole-rupee amount for display, e.g. 5000 → "₹5,000". */
export function formatINR(amount: number): string {
  return inr.format(Math.round(amount))
}

/** Formats an ISO date (YYYY-MM-DD) for display, without timezone drift. */
export function formatLedgerDate(value: string): string {
  const date = new Date(`${value}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
