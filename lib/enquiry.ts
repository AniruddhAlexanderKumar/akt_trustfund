export const enquirySubjects = [
  'General enquiry',
  'Contributing to the initiative',
  'The public ledger',
  'Media and press',
  'Other',
] as const

export type EnquirySubject = (typeof enquirySubjects)[number]
