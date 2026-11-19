import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing the use of this website.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="November 2026">
      <LegalSection heading="Purpose of this website">
        <p>
          This website provides information about the first initiative of The Late Dr. Anil Kumar
          Thakur Foundation: raising ₹50,000 to support the education of one student in Jamshedpur,
          Jharkhand.
        </p>
      </LegalSection>

      <LegalSection heading="Status of the initiative">
        <p>
          The initiative is independently coordinated. It is not a registered trust, society,
          company, NGO or tax-exempt fundraising organisation, and none of those statuses is claimed
          anywhere on this website.
        </p>
        <p>
          Nothing on this website constitutes an offer of a scholarship, an award, employment, a
          donation facility, a tax deduction or a contractual commitment.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy of information">
        <p>
          Financial figures shown on this website are calculated from the verified entries in the
          published ledger. No contribution, expenditure or outcome is shown in advance of
          verification, and no figure is estimated or illustrated.
        </p>
        <p>
          No claim is made that any particular payment has been made, or that any particular result
          has been achieved, other than what the ledger records.
        </p>
      </LegalSection>

      <LegalSection heading="Contributions and payments">
        <p>
          No payment is collected through this website, and no payment details, UPI identifier, QR
          code or bank account number is published here. Financial arrangements are supervised by the
          responsible adult family member coordinating the initiative.
        </p>
        <p>
          No donation receipt is issued, and no tax deduction is promised or implied.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          Text on this website belongs to the initiative. The photograph remains the property of its
          photographer and is used under the licence credited in the footer; reuse is subject to that
          licence.
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
          Links to external websites are provided for attribution and reference. The initiative is
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
        <p>
          These terms may be revised as the initiative develops. The current version is always on
          this page.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
