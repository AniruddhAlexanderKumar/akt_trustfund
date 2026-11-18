import { Hero } from '@/components/hero'
import { Memory } from '@/components/memory'
import { Campaign } from '@/components/campaign'
import { UseOfFunds } from '@/components/use-of-funds'
import { Transparency } from '@/components/transparency'
import { Beneficiary } from '@/components/beneficiary'
import { Status } from '@/components/status'
import { ContactSection } from '@/components/contact-section'
import { FinalCta } from '@/components/final-cta'
import { isContactConfigured } from '@/lib/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Memory />
      <Campaign />
      <UseOfFunds />
      <Transparency />
      <Beneficiary />
      <Status />
      <ContactSection accepting={isContactConfigured()} />
      <FinalCta />
    </>
  )
}
