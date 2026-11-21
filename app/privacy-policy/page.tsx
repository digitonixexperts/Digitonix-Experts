import SiteHeader from "../components/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Digitonix Experts",
  description: "Learn how Digitonix Experts currently handles information on this website."
};

export default function PrivacyPolicyPage() {
  return <main className="service-page">
    <SiteHeader />
    <section className="service-hero privacy-hero"><div className="container">
      <div className="eyebrow"><span className="eyebrow-line" /> YOUR INFORMATION</div>
      <h1>Privacy <span>Policy.</span></h1>
      <p className="service-intro">This page explains what the Digitonix Experts website currently collects and what happens when you use it.</p>
      <p className="privacy-updated">Last updated: November 21, 2026</p>
    </div></section>
    <section className="section privacy-content"><div className="container privacy-copy">
      <p><strong>Important:</strong> The website inquiry form is currently a front-end demonstration. It does not send submissions to Digitonix Experts, an email inbox, or a customer-management system, and it does not save the information you enter.</p>
      <h2>1. Information you provide</h2>
      <p>The contact form displays fields for your name, work email, requested service, and project message. At present, those fields are handled only in your browser for the form demonstration. Do not enter sensitive or confidential information into the form.</p>
      <h2>2. Website data and hosting</h2>
      <p>This website is hosted using Vercel. Hosting providers and infrastructure services may process technical information such as requests, IP addresses, browser details, and server logs to operate, protect, and troubleshoot the website. The exact information retained and retention periods depend on the hosting configuration and provider policies.</p>
      <h2>3. Cookies and analytics</h2>
      <p>This policy does not claim that analytics, advertising, or tracking cookies are in use. If those tools are added, this policy should be updated to explain what they collect and how visitors can manage their choices.</p>
      <h2>4. How information may be used</h2>
      <p>Because the inquiry form is not connected to a submission service, Digitonix Experts does not receive the form details through this website at this time. If a working contact service, analytics tool, or other integration is added, the policy should be revised to describe the information received and its purpose.</p>
      <h2>5. Sharing and service providers</h2>
      <p>Technical service providers may process information as needed to host and deliver the website. This page does not represent that inquiry-form data is shared, sold, or transferred; the form currently does not transmit submissions.</p>
      <h2>6. Data security and retention</h2>
      <p>We do not currently store contact-form submissions because the form has no backend connection. Technical logs and infrastructure data may be handled under the hosting provider’s settings and policies. No specific retention period or security certification is promised by this page.</p>
      <h2>7. Your choices</h2>
      <p>You can choose not to enter information into the demonstration form. You can also use your browser settings to manage cookies and other site data, subject to how your browser works.</p>
      <h2>8. Updates to this policy</h2>
      <p>This policy may need to change when the website’s features, contact process, analytics, or service providers change. The updated date at the top of this page will indicate when this page was last revised.</p>
      <h2>9. Contact</h2>
      <p>A verified business contact email or postal address has not yet been provided for publication on this website. Please use the <Link href="/contact">Contact Us page</Link> for current website information, noting that its form is presently a demonstration and does not deliver messages.</p>
      <div className="privacy-disclaimer"><strong>Setup note:</strong> Before launching a live lead form, connect an email or CRM service and revise this policy to reflect the actual data collected, recipients, retention periods, and applicable privacy rights.</div>
      <Link className="button button-blue" href="/contact">Go to Contact Us <span aria-hidden="true">↗</span></Link>
    </div></section>
    <footer className="site-footer"><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><Link href="/contact">Contact Us</Link><Link href="/">Back to home ↑</Link></div></footer>
  </main>;
}
