export const site = {
  name: 'The Late Dr. Anil Kumar Thakur Foundation',
  shortName: 'AKT Foundation',
  tagline: 'A Legacy of Healing. A Future of Learning.',
  location: 'Jamshedpur, Jharkhand',
  locationFull: 'Jamshedpur, Jharkhand, India.',
  description:
    'An independently coordinated charitable initiative in memory of Late Dr. Anil Kumar Thakur, raising ₹50,000 to support the education of one student in Jamshedpur, Jharkhand.',
  disclaimer:
    'This is an independently coordinated charitable initiative in memory of Late Dr. Anil Kumar Thakur. It is not a registered trust, society, NGO or tax-exempt organisation, and no tax deduction is offered. Financial arrangements are supervised by an adult family member.',
} as const

export type NavItem = { label: string; href: string }

export const navItems: NavItem[] = [
  { label: 'In His Memory', href: '/#memory' },
  { label: 'The Initiative', href: '/#campaign' },
  { label: 'Use of Funds', href: '/#use-of-funds' },
  { label: 'Transparency', href: '/#transparency' },
  { label: 'Contact', href: '/#contact' },
]

export const hero = {
  eyebrow: 'In memory of Late Dr. Anil Kumar Thakur',
  headline: "₹50,000 to support one student's education.",
  body: 'An independently coordinated charitable initiative in Jamshedpur, Jharkhand. Contributions are verified before they are recorded in the public ledger.',
  primaryCta: { label: 'See the Target', href: '/#campaign' },
  secondaryCta: { label: 'Read the Ledger', href: '/#transparency' },
  footline: 'One student. One education. A continuing legacy.',
  image: '/images/hero-jamshedpur.jpg',
  imageAlt:
    'Evening light over the gardens, water channels and tree-lined avenues of Jubilee Park in Jamshedpur',
}

export const memory = {
  eyebrow: 'In his memory',
  heading: 'Why this is being done in his name.',
  paragraphs: [
    'Late Dr. Anil Kumar Thakur dedicated his professional life to medicine and to the people of Jamshedpur. He is remembered by his family for providing medical assistance to people who could not afford it.',
    'He believed deeply in education. At a time when opportunities for girls were often restricted, he ensured that his three daughters received an education.',
    'This initiative continues that conviction: that opportunity should not be determined by circumstance.',
  ],
} as const

export const contact = {
  eyebrow: 'Contact',
  heading: 'Enquiries about the initiative.',
  body: 'Questions about the ₹50,000 initiative, the way contributions are handled, or the public ledger are welcome. This form is the only channel published on this website: no postal address or telephone number is given out.',
  note: 'Financial arrangements are supervised by the responsible adult family member. No payment is collected through this website.',
  pendingTitle: 'This form is not yet accepting submissions.',
  pendingBody:
    'Online enquiries will open once an official inbox and enquiry-handling arrangements are in place. No message has been sent, and nothing you type here is stored or transmitted.',
} as const

export const photographyCredits = [
  {
    title: 'Jubilee Park, Jamshedpur',
    author: 'Shadab Ali',
    licence: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:A_green_oasis_in_city_of_steel_Jamshedpur_01.jpg',
  },
] as const
