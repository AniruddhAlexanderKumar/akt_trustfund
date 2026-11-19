export const site = {
  name: 'The Late Dr. Anil Kumar Thakur Foundation',
  shortName: 'AKT Foundation',
  tagline: 'In Memory. In Service. For Generations.',
  location: 'Jamshedpur, Jharkhand',
  locationFull: 'Jamshedpur, Jharkhand, India.',
  email: 'akt-foundation@outlook.com',
  phone: '+91 7019844552',
  phoneHref: 'tel:+917019844552',
  description:
    'The Late Dr. Anil Kumar Thakur Foundation is a charitable initiative in Jamshedpur, Jharkhand, raising ₹50,000 to support the education of one student.',
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
  eyebrow: 'In Memory. In Service. For Generations.',
  headline: 'The Late Dr. Anil Kumar Thakur Foundation',
  body: 'A charitable initiative in Jamshedpur, Jharkhand, raising ₹50,000 to support one student’s education.',
  primaryCta: { label: 'See the Target', href: '/#transparency' },
  secondaryCta: { label: 'Read the Ledger', href: '/#transparency' },
  image: '/images/hero-jamshedpur.jpg',
  imageAlt:
    'Evening light over the gardens, water channels and tree-lined avenues of Jubilee Park in Jamshedpur',
} as const

export const memory = {
  eyebrow: 'In his memory',
  heading: 'Why this is being done in his name.',
  paragraphs: [
    'This initiative is being undertaken in memory of Dr. Anil Kumar Thakur, who practised medicine in Jamshedpur and devoted much of his professional life to treating patients, including those who could not afford medical care.',
    'He also believed strongly in education, ensuring that all three of his daughters received an education at a time when that opportunity was not equally accessible to girls.',
    'By supporting a student’s education in his name, we hope to carry forward two things that defined his life: access to education and service to others. This first initiative is a practical expression of those values, turning his legacy into an opportunity for someone who needs it.',
  ],
} as const

export const contact = {
  eyebrow: 'Contact',
  heading: 'Enquiries about the initiative.',
  body: 'Questions about the initiative, the way contributions are handled, or the public ledger are welcome.',
  email: { label: 'akt-foundation@outlook.com', href: 'mailto:akt-foundation@outlook.com' },
  phone: { label: '+91 7019844552', href: 'tel:+917019844552' },
  note: 'No payment is collected through this website.',
  pendingTitle: 'This form is not yet accepting submissions.',
  pendingBody:
    'Online enquiries will open once delivery is configured. In the meantime, please write to akt-foundation@outlook.com or call +91 7019844552. Nothing typed here is stored or transmitted.',
} as const

export const photographyCredits = [
  {
    title: 'Jubilee Park, Jamshedpur',
    author: 'Shadab Ali',
    licence: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:A_green_oasis_in_city_of_steel_Jamshedpur_01.jpg',
  },
] as const
