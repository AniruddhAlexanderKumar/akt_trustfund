import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing the use of the Late Dr. Anil Kumar Thakur Foundation website.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="November 2026">
      <LegalSection heading="Purpose of this website">
        <p>
          This website provides information about {site.name}, the life it commemorates and the
          programmes the foundation intends to develop in Jamshedpur, Jharkhand.
        </p>
      </LegalSection>

      <LegalSection heading="Status of the foundation">
        <p>
          The foundation is an initiative being established. Nothing on this website constitutes an
          offer of a scholarship, an award, employment, a donation facility or a contractual
          commitment. Programme descriptions set out intentions and are subject to formal
          establishment, approval and available funding.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy of information">
        <p>
          Content is published in good faith and is kept as accurate as possible. Programme details,
          timelines and institutional information may change as the foundation is established, and
          will be updated on this website.
        </p>
        <p>
          No claim is made that the foundation is registered, that any programme is operational, or
          that any particular outcome has been achieved.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          Text on this website is the property of the foundation. Photographs remain the property of
          their photographers and are used under the licences credited in the footer. Their reuse is
          subject to those licences.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>
          You agree not to misuse this website, including by attempting to gain unauthorised access
          to it, submitting false or abusive enquiries, or interfering with its normal operation.
        </p>
      </LegalSection>

      <LegalSection heading="External links">
        <p>
          Links to external websites are provided for attribution and reference. The foundation is
          not responsible for their content or practices.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of India, and any dispute would be subject to the
          jurisdiction of the courts of Jharkhand.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>These terms may be revised as the foundation is established. The current version is always on this page.</p>
      </LegalSection>
    </LegalPage>
  )
}
