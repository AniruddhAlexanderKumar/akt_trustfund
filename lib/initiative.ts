/**
 * The foundation's one active initiative.
 *
 * Public financial figures are never written here. Targets and intentions are
 * stated; everything numeric that could change is derived from
 * `data/first-initiative/ledger.json` by `lib/initiative-ledger.ts`.
 */

export const initiative = {
  eyebrow: 'First initiative',
  headline: 'One Student. A Better Educational Opportunity.',
  targetAmount: 50000,
  location: 'Jamshedpur, Jharkhand, India',

  intro: [
    'The foundation’s first initiative is to raise ₹50,000 to cover the educational expenses of one financially disadvantaged student in Jamshedpur, Jharkhand.',
    'The student is at school, and a year of fees, books and examination charges is more than the household can absorb. The fund is meant to cover those costs, so that the decision to stop studying is not made for want of money.',
    'Contributions are arranged directly with the family member coordinating the initiative — there is no payment gateway or donation button on this website — and every contribution is verified and published in the ledger before it is counted towards the target.',
  ],

  processHeading: 'How it works',
  processTitle: 'From a contribution to a paid fee.',
  process: [
    {
      title: 'A contribution is made',
      body: 'Money reaches the family member coordinating the initiative directly. Nothing is collected through this website.',
    },
    {
      title: 'It is verified',
      body: 'The amount is matched to a bank or UPI record before it is counted towards the target.',
    },
    {
      title: 'The expense is confirmed',
      body: 'The school or provider confirms that the fees, books or examination charges are current and payable.',
    },
    {
      title: 'Paid, then published',
      body: 'The provider is paid, and both the contribution and the expenditure are entered in the public ledger.',
    },
  ],

  useOfFundsIntro:
    'Every rupee of this first initiative is directed towards the selected student’s verified educational expenses.',
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
    'Every figure for this first initiative comes from verified entries. Nothing is counted towards the total until a contribution has been received and confirmed.',

  ledgerRules: [
    'Only verified contributions and expenditure appear — each entry is matched to a statement or receipt before publication.',
    'Donors who chose to be anonymous are recorded simply as “Anonymous”, and a donor is named only if they have asked to be. No UPI details, bank information, telephone numbers or transaction identifiers are published.',
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
    body: 'The foundation’s first initiative is to raise ₹50,000 for one student. Every verified contribution moves them closer to an education they might otherwise go without.',
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
