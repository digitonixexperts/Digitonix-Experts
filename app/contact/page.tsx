"use client";

import SiteHeader from "../components/SiteHeader";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return <main className="service-page">
    <SiteHeader />
    <section className="service-hero contact-page-hero"><div className="container">
      <div className="eyebrow"><span className="eyebrow-line" /> GET IN TOUCH</div>
      <div className="service-hero-grid"><div>
        <h1>Let’s talk about<br /><span>what’s next.</span></h1>
        <p className="service-intro">Tell us a little about your business, your idea, or the challenge you’re working through. We’ll help you identify a practical next step.</p>
        <div className="hero-actions"><a className="button button-blue" href="#contact-form">Start an inquiry <span aria-hidden="true">↗</span></a><Link className="text-link" href="/#services">Explore our services →</Link></div>
      </div><div className="service-hero-art"><span className="service-art-number">DIGITONIX EXPERTS</span><span className="service-art-mark">DX</span><span className="service-art-caption">LET’S BUILD SOMETHING<br />MEANINGFUL TOGETHER</span></div></div>
    </div></section>
    <section className="section contact-page-content" id="contact-form"><div className="container contact-page-grid">
      <div><div className="eyebrow"><span className="eyebrow-line" /> PROJECT INQUIRIES</div><h2>Start with a<br /><span>conversation.</span></h2><p>Share the basics and think through the right direction for your project. We work with businesses across the United States.</p><div className="contact-page-note"><b>Before you submit</b><p>This website’s inquiry form is not connected to an email or CRM service yet. Submitting it will not deliver your message to our team. Please check back for direct contact details once they are added.</p></div><Link href="/privacy-policy" className="text-link">Read our Privacy Policy →</Link></div>
      <form className="contact-form contact-page-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
        <div className="form-heading"><span>PROJECT INQUIRY</span><span>LET’S TALK ↗</span></div>
        {submitted ? <div className="form-success"><span>!</span><h3>Form preview only</h3><p>Your message has not been sent or stored. The inquiry form needs an email or CRM integration before it can receive submissions.</p><button type="button" className="button button-blue" onClick={() => setSubmitted(false)}>Back to form</button></div> : <>
          <label>Your name<input required name="name" placeholder="Jane Smith" /></label>
          <label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label>
          <label>What do you need help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{["Website Development","WordPress Development","Shopify Development","SEO","Digital Marketing","Graphic Design","Branding","App Development","Not sure yet"].map((x) => <option key={x}>{x}</option>)}</select></label>
          <label>Tell us about your project<textarea name="message" rows={5} placeholder="A few details about your goals, timeline, or ideas..." /></label>
          <button className="button button-blue form-submit" type="submit">Preview inquiry <span aria-hidden="true">↗</span></button>
          <p className="form-privacy">Demo only — this form does not transmit or save your information.</p>
        </>}
      </form>
    </div></section>
    <footer className="site-footer"><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><Link href="/pricing">Pricing</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/">Back to home ↑</Link></div></footer>
  </main>;
}
