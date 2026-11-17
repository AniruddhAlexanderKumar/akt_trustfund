import { Hero } from '@/components/hero'
import { LegacyStory } from '@/components/legacy-story'
import { Philosophy } from '@/components/philosophy'
import { MedicalScholars } from '@/components/medical-scholars'
import { Commitment } from '@/components/commitment'
import { Geography } from '@/components/geography'
import { Transparency } from '@/components/transparency'
import { ContactSection } from '@/components/contact-section'
import { Closing } from '@/components/closing'
import { isContactConfigured } from '@/lib/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LegacyStory />
      <Philosophy />
      <MedicalScholars />
      <Commitment />
      <Geography />
      <Transparency />
      <ContactSection accepting={isContactConfigured()} />
      <Closing />
    </>
  )
}
