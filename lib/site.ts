export const site = {
  name: 'The Late Dr. Anil Kumar Thakur Foundation',
  shortName: 'AKT Foundation',
  tagline: 'A Legacy of Healing. A Future of Learning.',
  location: 'Jamshedpur, Jharkhand',
  locationFull: 'Jamshedpur, Jharkhand, India.',
  description:
    'Established in memory of Late Dr. Anil Kumar Thakur, the foundation aims to support aspiring medical professionals through education, scholarships and community service in Jamshedpur.',
  disclaimer:
    'The foundation is an initiative being established in memory of Late Dr. Anil Kumar Thakur. Programme details and institutional information are subject to formal establishment and approval.',
} as const

export type NavItem = { label: string; href: string }

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'His Legacy', href: '/his-legacy' },
  { label: 'Our Mission', href: '/#mission' },
  { label: 'Medical Scholars', href: '/#scholars' },
  { label: 'Pilot 001', href: '/pilot-001' },
  { label: 'Our Initiatives', href: '/#initiatives' },
  { label: 'Transparency', href: '/#transparency' },
  { label: 'Contact', href: '/#contact' },
]

export const hero = {
  eyebrow: 'In memory of Late Dr. Anil Kumar Thakur',
  headlineFirst: 'A Legacy of Healing.',
  headlineSecond: 'A Future of Learning.',
  body:
    'Continuing a life dedicated to medicine, education and service by creating opportunities for the next generation of aspiring medical professionals.',
  primaryCta: { label: 'Discover Our Mission', href: '/#mission' },
  secondaryCta: { label: 'Explore His Legacy', href: '/his-legacy' },
  footline:
    'Rooted in Jamshedpur. Committed to a future where opportunity is not determined by financial circumstance.',
  image: '/images/hero-jamshedpur.jpg',
  imageAlt:
    'Evening light over the gardens, water channels and tree-lined avenues of Jubilee Park in Jamshedpur',
}

export const story = {
  eyebrow: 'Founding story',
  heading: 'Some legacies are remembered. Others are continued.',
  paragraphs: [
    'Late Dr. Anil Kumar Thakur dedicated his professional life to medicine and the people of Jamshedpur.',
    'Remembered by his family for providing medical assistance to people who could not afford it, he believed that helping others was an essential responsibility.',
    'Beyond his medical profession, he believed deeply in education. At a time when opportunities for girls were often restricted, he ensured that his three daughters received an education.',
    'His life reflected a belief that opportunity should not be determined by circumstance.',
    'The foundation is being established to carry these values forward, supporting the next generation through education, medicine and community service.',
  ],
  portraitCaption: 'Late Dr. Anil Kumar Thakur',
  portraitPlaceholder: 'Photograph to be added by the family.',
  cta: { label: 'Read His Story', href: '/his-legacy' },
}

export const foundingQuote = {
  text: 'He believed that helping others was an essential responsibility.',
  attribution: "From the foundation's founding statement",
} as const

export const pillars = [
  {
    index: 'I',
    title: 'Compassion in Medicine',
    body:
      'Healthcare is more than a profession. It is a responsibility to serve humanity, particularly those who cannot afford the care they need.',
  },
  {
    index: 'II',
    title: 'Opportunity Through Education',
    body:
      "Every student deserves the opportunity to develop their potential. Financial hardship should not determine the limits of someone's ambition.",
  },
  {
    index: 'III',
    title: 'Service Across Generations',
    body:
      'The values of compassion, generosity and responsibility should not end with one lifetime. They should be carried forward.',
  },
] as const

export const programme = {
  eyebrow: 'Our flagship educational initiative',
  name: 'The Medical Scholars Programme',
  heading: "Supporting tomorrow's doctors, starting today.",
  status: 'Programme in development',
  intro: [
    'The Medical Scholars Programme is being developed to support students from Grade 7 onwards who aspire to pursue careers in medicine.',
    'We believe that financial circumstances should never be the sole reason a capable student abandons their ambition of becoming a doctor.',
    'Through structured educational assistance, academic resources, mentorship and long-term financial support, the programme aims to accompany students throughout their educational journey.',
  ],
  cta: { label: 'Learn About the Medical Scholars Programme', href: '/medical-scholars' },
  image: '/images/medical-students.jpg',
  imageAlt:
    'Four women medical students in white coats walking to class with backpacks at Banaras Hindu University, Varanasi',
  stages: [
    {
      stage: '01',
      title: 'Junior Scholars',
      grades: 'Grades 7–8',
      body:
        'Early academic support, foundational science resources and opportunities to explore healthcare.',
    },
    {
      stage: '02',
      title: 'Senior School Scholars',
      grades: 'Grades 9–10',
      body: 'Educational assistance, science learning resources and academic guidance.',
    },
    {
      stage: '03',
      title: 'Pre-Medical Scholars',
      grades: 'Grades 11–12',
      body:
        'School assistance, science education, NEET preparation support and guidance for medical admissions.',
    },
    {
      stage: '04',
      title: 'Future Doctors',
      grades: 'Medical education',
      body:
        'Financial assistance for eligible students pursuing recognised medical degrees, subject to programme policies and available funding.',
    },
  ],
  principles: [
    'Open to all genders.',
    'Financial need is a major selection consideration.',
    'Academic potential and commitment are also considered.',
    'Students are not required to make an irrevocable career commitment at Grade 7.',
    'Continued assistance is subject to transparent eligibility reviews.',
    'No guaranteed scholarship amounts or awards are displayed until they are formally established.',
  ],
  journeyStart: 'Grade 7',
  journeyEnd: 'Medical college',
} as const

export const initiatives = [
  {
    index: '01',
    title: 'Educational Access',
    body:
      'Helping students access quality education and the resources needed to pursue their ambitions.',
  },
  {
    index: '02',
    title: 'Medical Education',
    body:
      'Supporting aspiring medical professionals through scholarships, academic assistance and mentorship.',
  },
  {
    index: '03',
    title: 'Community Healthcare',
    body:
      'Exploring initiatives that improve access to healthcare for financially disadvantaged communities in Jamshedpur.',
  },
] as const

export const initiativesNote =
  'These are the areas in which the foundation intends to work. No programme is yet operational, and nothing on this page should be read as a claim of completed charitable activity.'

export const roadmap = {
  eyebrow: 'Progress',
  heading: 'Where the foundation stands.',
  intro:
    'The foundation is being established carefully and in the open. Each stage below is published here as it is reached, with the next step stated plainly.',
  note: 'No dates are published until they are confirmed. A stage marked as planned is an intention, not a promise.',
  steps: [
    {
      status: 'done',
      label: 'Published',
      title: 'Founding statement',
      body: 'The family publishes the founding statement, the life it commemorates and the values the foundation will carry forward.',
    },
    {
      status: 'active',
      label: 'In progress',
      title: 'Formal establishment',
      body: 'Registration of the trust, adoption of a governing document and the naming of trustees who will be accountable for it.',
    },
    {
      status: 'next',
      label: 'Planned',
      title: 'Governance and policies',
      body: 'Publication of the legal structure, governance arrangements, financial controls and the scholarship selection policy.',
    },
    {
      status: 'next',
      label: 'Planned',
      title: 'Programme design',
      body: 'Eligibility criteria, the application process and the review procedure, published before any student is invited to apply.',
    },
    {
      status: 'next',
      label: 'Planned',
      title: 'The first scholars',
      body: 'The first Medical Scholars cohort is announced, with support released against published criteria and available funding.',
    },
  ],
} as const

export const waysToHelp = {
  eyebrow: 'Get involved',
  heading: 'There is a part for you in this.',
  intro:
    'The foundation cannot yet accept funds, but the people who will make the programme work can begin to be found now.',
  note: 'Nothing here is a claim that a programme is running. Enquiries are welcome through the contact form.',
  items: [
    {
      icon: 'mentor',
      title: 'Mentor a student',
      body: 'Doctors, medical students and science teachers willing to offer steady guidance once scholars are enrolled.',
      status: 'Enquiries welcome',
      open: true,
    },
    {
      icon: 'give',
      title: 'Contribute',
      body: 'Financial support will open once the trust is registered and a transparent receipting process is in place.',
      status: 'Not yet open',
      open: false,
    },
    {
      icon: 'partner',
      title: 'Partner with us',
      body: 'Schools, colleges and clinics in Jamshedpur that share this purpose and know the students it would serve.',
      status: 'Enquiries welcome',
      open: true,
    },
    {
      icon: 'share',
      title: 'Spread the word',
      body: 'Tell a teacher, a neighbour or a student who might one day be the reason this foundation exists.',
      status: 'Open now',
      open: true,
    },
  ],
} as const

export const faq = {
  eyebrow: 'Questions',
  heading: 'Answers, before you write.',
  intro:
    'Plain answers about the foundation as it stands today. Anything not answered here can be asked through the contact form.',
  items: [
    {
      question: 'Is the foundation registered?',
      answer:
        'Not yet. The trust is being formally established. Registration details, the legal structure and the trustees will be published on this website once they exist. Nothing is stated here in advance of that.',
    },
    {
      question: 'Can a student apply for support now?',
      answer:
        'No. Applications have not opened and no student is currently receiving support. Eligibility criteria, the application process and the review procedure will be published on this website before anyone is invited to apply.',
    },
    {
      question: 'Who is the programme intended to support?',
      answer:
        'Students from Grade 7 onwards in Jamshedpur and the surrounding areas of Jharkhand who hope to study medicine. The programme is open to all genders. Financial need is a major selection consideration, and academic potential and commitment also count.',
    },
    {
      question: 'How will scholars be chosen?',
      answer:
        'Selection will combine financial need with academic potential and demonstrated commitment, and continued support will depend on periodic eligibility reviews. The full policy, including how review decisions are made, will be published before applications open. No quotas have been set or announced.',
    },
    {
      question: 'How much will a scholarship be worth?',
      answer:
        'No amounts are published, because they have not been established. The intention is to help with school costs, books and learning resources, and examination or admission fees, subject to available funding in any given year.',
    },
    {
      question: 'How can I contribute or help?',
      answer:
        'Please use the contact form. Contributions to the foundation cannot be accepted until the trust is registered and a receipting process exists. The first initiative, Pilot 001, is separately funded by the family and a small circle of friends; it is not a public fundraising programme, and nothing is collected through this website. Offers of mentorship, partnerships and other support are welcome now.',
    },
    {
      question: 'How do I get in touch?',
      answer:
        'Through the enquiry form on this website, which is the only channel currently published. A postal address and telephone number will appear once they are formally available and confirmed by the family.',
    },
  ],
} as const

export const geography = {
  heading: 'Rooted in Jamshedpur.',
  paragraphs: [
    'Jamshedpur is where this story begins.',
    'Our initial focus is on the communities of Jamshedpur and surrounding areas in Jharkhand.',
    'We aim to develop programmes that respond to local educational and healthcare needs, building an institution whose impact can grow responsibly over time.',
  ],
  image: '/images/jamshedpur-city.jpg',
  imageAlt:
    'A view across central Jamshedpur, with tree-lined roads, a roundabout and the low skyline of the city',
}

export const transparency = {
  eyebrow: 'Transparency and governance',
  heading: 'Trust is built through accountability.',
  paragraphs: [
    'We believe that charitable work must be supported by transparency, responsible governance and clear accountability.',
    'As the foundation develops, information about its legal structure, governance, programmes, financial management and impact will be published here.',
  ],
  pending: 'Information will be published following formal establishment.',
  items: [
    { title: 'Legal registration status', note: 'Status of formal registration and the applicable legal structure.' },
    { title: 'Governance and trustees', note: 'The governing body, its roles and its responsibilities.' },
    { title: 'Financial reporting', note: 'Statements of income, expenditure and the use of funds.' },
    { title: 'Scholarship selection policy', note: 'Eligibility, selection criteria and review procedures.' },
    { title: 'Annual reports', note: 'Programme activity, outcomes and institutional progress.' },
    { title: 'Programme updates', note: 'Current status of each initiative as it is developed.' },
  ],
} as const

export const contact = {
  eyebrow: 'Contact',
  heading: 'Correspondence and enquiries.',
  body:
    'Enquiries about the foundation, the Medical Scholars Programme and opportunities to contribute are welcome. This form is the only channel on this website; no postal address or telephone number is published while the foundation is being formally established.',
  pendingTitle: 'This form is not yet accepting submissions.',
  pendingBody:
    'Online enquiries will open once the foundation\'s official inbox and enquiry-handling arrangements are in place. No message has been sent, and nothing you type here is stored or transmitted.',
  formNote:
    'Your enquiry is sent by email to the foundation and is not stored on this website. We use it only to respond to you.',
} as const

export const closing = {
  heading: 'A life of service deserves a legacy of service.',
  body:
    'Through education, medicine and compassion, we hope to create opportunities that continue making a difference across generations.',
  primaryCta: { label: 'Get in Touch', href: '/#contact' },
  secondaryCta: { label: 'Explore Our Mission', href: '/#mission' },
}

export const photographyCredits = [
  {
    title: 'Jubilee Park, Jamshedpur',
    author: 'Shadab Ali',
    licence: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:A_green_oasis_in_city_of_steel_Jamshedpur_01.jpg',
  },
  {
    title: 'Cityscapes of Jamshedpur',
    author: 'Shahbaz26',
    licence: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Cityscapes_of_Jamshedpur.jpg',
  },
  {
    title: 'Women medical students, Banaras Hindu University',
    author: 'Adam Jones',
    licence: 'CC BY-SA 2.0',
    href:
      'https://commons.wikimedia.org/wiki/File:Women_Medical_Students_-_Banaras_Hindu_University_-_Varanasi_-_Uttar_Pradesh_-_India_(12519240763).jpg',
  },
  {
    title: 'Community health worker, Odisha',
    author: 'DFID',
    licence: 'CC BY-SA 2.0',
    href:
      'https://commons.wikimedia.org/wiki/File:Community_health_worker_gives_a_vaccination_in_Odisha_state,_India_(8380317750).jpg',
  },
] as const
