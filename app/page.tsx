import { Hero } from '@/components/hero'
import { LegacyStory } from '@/components/legacy-story'
import { QuoteBand } from '@/components/quote-band'
import { Philosophy } from '@/components/philosophy'
import { MedicalScholars } from '@/components/medical-scholars'
import { PilotCampaign } from '@/components/pilot-campaign'
import { Roadmap } from '@/components/roadmap'
import { Commitment } from '@/components/commitment'
import { WaysToHelp } from '@/components/ways-to-help'
import { Geography } from '@/components/geography'
import { Transparency } from '@/components/transparency'
import { Faq } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'
import { Closing } from '@/components/closing'
import { JsonLd } from '@/components/json-ld'
import { isContactConfigured } from '@/lib/contact'
import { faqJsonLd } from '@/lib/structured-data'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LegacyStory />
      <QuoteBand />
      <Philosophy />
      <MedicalScholars />
      <PilotCampaign />
      <Roadmap />
      <Commitment />
      <WaysToHelp />
      <Geography />
      <Transparency />
      <Faq />
      <ContactSection accepting={isContactConfigured()} />
      <Closing />
      <JsonLd data={faqJsonLd()} />
    </>
  )
}
