export const enquirySubjects = [
  'General enquiry',
  'The Medical Scholars Programme',
  'Supporting the foundation',
  'Media and press',
  'Other',
] as const

export type EnquirySubject = (typeof enquirySubjects)[number]
