/**
 * The foundation's one active initiative.
 *
 * Public financial figures are never written here. Targets and intentions are
 * stated; everything numeric that could change is derived from
 * `data/first-initiative/ledger.json` by `lib/initiative-ledger.ts`.
 */

export const initiative = {
  eyebrow: 'First initiative',
  name: "One Student's Education",
  headline: 'One Student. A Better Educational Opportunity.',
  status: 'Independently coordinated charitable initiative',
  targetAmount: 50000,
  beneficiaries: 1,
  location: 'Jamshedpur, Jharkhand, India',

  intro: [
    'We are raising ₹50,000 to cover the educational expenses of one financially disadvantaged student in Jamshedpur, Jharkhand.',
  ],

  useOfFundsIntro:
    'The funds are directed towards the selected student’s verified educational expenses.',
  useOfFunds: [
    {
      title: 'School fees',
      body: 'Term and tuition fees at the school the student attends.',
    },
    {
      title: 'Books and learning materials',
      body: 'Textbooks, stationery and study materials.',
    },
    {
      title: 'Examination fees',
      body: 'School, board or qualifying examination fees.',
    },
    {
      title: 'Other educational costs',
      body: 'Costs clearly connected to the student continuing their education, and which can be verified.',
    },
  ],
  useOfFundsNote:
    'Where possible, payments go directly to the school or provider rather than in cash. Nothing is released without verification.',

  transparencyIntro:
    'Every figure comes from verified entries. Totals remain at zero until a contribution is received and confirmed.',

  ledgerRules: [
    'Only verified contributions and expenditure appear — each entry is matched to a statement or receipt before publication.',
    'Donors appear under anonymised labels such as "Family Contributor 01". No UPI details, bank information, telephone numbers or transaction identifiers are published.',
    'The running balance is calculated from the entries above it, so the table reconciles to the totals.',
  ],

  beneficiaryIntro: 'The student will be selected on the basis of:',
  beneficiaryCriteria: [
    {
      title: 'Financial need',
      body: 'Household circumstances that would otherwise end the student’s education.',
    },
    {
      title: 'Educational circumstances',
      body: 'Where the student is in their schooling, and what is needed to continue.',
    },
    {
      title: 'Verification of expenses',
      body: 'Confirmation from the school or provider that the costs are real, current and payable.',
    },
  ],

  beneficiaryPrivacy:
    'The student’s identity is protected. No name, photograph, school, address or document is published without consent from a parent or guardian, and any account of the outcome will be anonymised.',

  legalHeading: 'What this initiative is — and is not.',
  legalIntro:
    'An independently coordinated initiative in memory of Late Dr. Anil Kumar Thakur.',
  legalStatements: [
    'It is not a registered trust, society, company, NGO or tax-exempt fundraising organisation, and none of those statuses is claimed.',
    'No tax deduction is promised, and no donation receipt is issued.',
    'No payment integration, UPI QR code or donation button is provided on this website.',
    'Financial arrangements are supervised by the responsible adult family member coordinating the initiative.',
  ],

  finalCta: {
    heading: "HELP US FUND ONE STUDENT'S EDUCATION.",
    body: '₹50,000 is our first target. Every verified contribution moves one student closer to an education they might otherwise go without.',
    primary: { label: 'Enquire About Contributing', href: '/#contact' },
  },
} as const

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

/** Formats a whole-rupee amount for display, e.g. 50000 → "₹50,000". */
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
