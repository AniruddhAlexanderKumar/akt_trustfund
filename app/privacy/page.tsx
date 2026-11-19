import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How information submitted through this website is handled, and what the public ledger does and does not publish.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2026">
      <LegalSection heading="About this policy">
        <p>
          This policy describes how {site.name} handles information in connection with this website.
          The initiative described here is independently coordinated, and this policy will be
          reviewed as arrangements develop.
        </p>
      </LegalSection>

      <LegalSection heading="What this website collects">
        <p>
          This website does not offer accounts, payments, newsletters or applications, and it does
          not set cookies or run third-party analytics, advertising or tracking scripts.
        </p>
        <p>
          The only information you can submit is through the enquiry form, which asks for your name,
          email address, an optional telephone number, the subject of your enquiry and your message.
          If the form is not accepting submissions, nothing you type is transmitted or stored.
          Questions can also be sent directly to {site.email} or {site.phone}.
        </p>
      </LegalSection>

      <LegalSection heading="How enquiries are used">
        <p>
          When the enquiry form is open, your message is delivered by email so that it can be read
          and answered. It is used only to respond to your enquiry. It is not sold, rented or used
          for marketing.
        </p>
        <p>
          Messages are not stored in a database on this website. They exist in email correspondence
          for as long as is needed to handle the enquiry and any related follow-up.
        </p>
      </LegalSection>

      <LegalSection heading="The public ledger">
        <p>
          The transaction ledger publishes no personal information. Contributions and expenditure
          appear only as anonymised references and labels, such as “Family Contributor 01”. No donor
          name, telephone number, UPI identifier, bank detail or private transaction identifier is
          published.
        </p>
        <p>
          The identity of the student supported by the initiative is not published. No name,
          photograph, school, address or document relating to a student appears on this website
          without appropriate consent from a parent or guardian.
        </p>
      </LegalSection>

      <LegalSection heading="Service providers">
        <p>
          Email delivery for the enquiry form is handled by a transactional email provider, which
          processes the message content solely to deliver it. No other third party receives
          information submitted through this website.
        </p>
      </LegalSection>

      <LegalSection heading="Photography and external links">
        <p>
          The photograph on this website is published under the licence credited in the footer and is
          linked to its source page on Wikimedia Commons. Following that link takes you to an
          external website with its own privacy practices.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You may ask what enquiry correspondence is held about you, or ask for it to be deleted.
          Requests can be made by emailing{' '}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-2 hover:text-forest"
          >
            {site.email}
          </a>{' '}
          or calling {site.phone}.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>This policy will be updated on this page as the initiative develops.</p>
      </LegalSection>
    </LegalPage>
  )
}
