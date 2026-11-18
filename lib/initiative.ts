/**
 * The foundation's one active initiative.
 *
 * Public financial figures are never written here. Targets and intentions are
 * stated; everything numeric that could change is derived from
 * `data/first-initiative/ledger.json` by `lib/initiative-ledger.ts`.
 */

export const initiative = {
  eyebrow: 'First initiative',
  name: "₹50,000 to Support One Student's Education",
  headline: '₹50,000. One Student. A Better Educational Opportunity.',
  status: 'Independently coordinated charitable initiative',
  targetAmount: 50000,
  beneficiaries: 1,
  location: 'Jamshedpur, Jharkhand, India',

  intro: [
    'We are raising ₹50,000 to support the education of one financially disadvantaged student in Jamshedpur, Jharkhand.',
    'This initiative is being undertaken in memory of Late Dr. Anil Kumar Thakur, whose life reflected a commitment to education, medicine and service.',
    'Our objective is simple: identify a student who genuinely needs financial assistance and direct the funds towards their educational expenses.',
  ],

  useOfFundsIntro:
    'The ₹50,000 will be directed towards the selected student’s educational expenses. The actual allocation will depend on the student’s verified needs.',
  useOfFunds: [
    {
      title: 'School fees',
      body: 'Term and tuition fees charged by the school the student attends.',
    },
    {
      title: 'Books and learning materials',
      body: 'Textbooks, stationery and the materials required for study.',
    },
    {
      title: 'Examination fees',
      body: 'Fees for school, board or qualifying examinations.',
    },
    {
      title: 'Other directly relevant educational expenses',
      body: 'Costs clearly connected to the student continuing their education, and which can be verified.',
    },
  ],
  useOfFundsNote:
    'Where possible, payments are made directly to the school or educational provider rather than in cash. Nothing is released without verification of the stated expense.',

  transparencyIntro:
    'Every figure below comes from verified entries only. Until a contribution is received and confirmed, the totals remain at zero.',

  ledgerRules: [
    'Only verified contributions and actual expenditure appear in the ledger. An entry is published after it has been matched to a statement or receipt by the adult family member overseeing the funds.',
    'Donors are identified by anonymised labels such as "Family Contributor 01". No personal UPI details, bank information, donor telephone numbers or private transaction identifiers are published.',
    'Supporting documents are published only with private information redacted.',
    'The running balance is calculated from the entries above it, so the table reconciles to the totals shown with it.',
  ],

  beneficiaryIntro: 'The student will be selected on the basis of:',
  beneficiaryCriteria: [
    {
      title: 'Financial need',
      body: 'Household circumstances that would otherwise prevent the student from continuing their education.',
    },
    {
      title: 'Current educational circumstances',
      body: 'Where the student is in their schooling, and what is required for them to continue.',
    },
    {
      title: 'The potential benefit of the assistance',
      body: 'Whether ₹50,000 would materially change what the student is able to do next.',
    },
    {
      title: 'Verification of the stated expenses',
      body: 'Confirmation from the school or provider that the costs are real, current and payable.',
    },
  ],
  beneficiaryPrivacy:
    'The student’s identity and personal information are protected. No name, photograph, school, address or document is published without appropriate consent from a parent or guardian. Any account of the outcome will be anonymised.',

  legalHeading: 'What this initiative is — and is not.',
  legalIntro:
    'This is an independently coordinated charitable initiative being undertaken in memory of Late Dr. Anil Kumar Thakur.',
  legalStatements: [
    'It is not a registered trust, society, company, NGO or tax-exempt fundraising organisation, and none of those statuses is claimed.',
    'No tax deduction is promised, and no donation receipt is issued.',
    'No payment integration, personal UPI QR code or donation button is provided on this website. Nothing is collected through it.',
    'Financial arrangements are supervised by the responsible adult family member coordinating the initiative.',
    'No contribution, expenditure or outcome is published in advance of verification.',
  ],

  finalCta: {
    heading: "HELP US FUND ONE STUDENT'S EDUCATION.",
    body: '₹50,000 is our first target. Every verified contribution brings us closer to providing one student with an educational opportunity they might otherwise struggle to afford.',
    primary: { label: 'Enquire About Contributing', href: '/#contact' },
    secondary: { label: 'Read the Ledger', href: '/#transparency' },
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
