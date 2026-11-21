"use client";

import { useState } from "react";
import SiteHeader from "./components/SiteHeader";

const services = [
  { slug: "website-development", number: "01", title: "Website Development", text: "Fast, responsive websites designed to turn visitors into customers.", tag: "Web experiences" },
  { slug: "wordpress-development", number: "02", title: "WordPress Development", text: "Flexible WordPress websites that are easy to manage and built to grow.", tag: "Content platforms" },
  { slug: "shopify-development", number: "03", title: "Shopify Development", text: "Conversion-focused online stores made for smoother shopping experiences.", tag: "E-commerce" },
  { slug: "seo", number: "04", title: "Search Engine Optimization", text: "Practical SEO strategies that help the right customers find your business.", tag: "Organic growth" },
  { slug: "digital-marketing", number: "05", title: "Digital Marketing", text: "Connected campaigns that build awareness, generate leads, and support growth.", tag: "Performance" },
  { slug: "graphic-design", number: "06", title: "Graphic Design", text: "Purposeful visual assets that make your brand easier to recognize and remember.", tag: "Creative studio" },
  { slug: "branding", number: "07", title: "Branding", text: "A distinct brand identity, voice, and visual system built around your business.", tag: "Brand identity" },
  { slug: "app-development", number: "08", title: "App Development", text: "Thoughtful mobile and web applications that solve real customer problems.", tag: "Digital products" }
];

const projects = [
  { type: "E-COMMERCE", title: "A better way to shop online", detail: "Shopify store concept", color: "project-blue", mark: "NORTH / 01" },
  { type: "BRAND & WEB", title: "A confident digital first impression", detail: "Brand identity + website concept", color: "project-lilac", mark: "FORM & FIELD" },
  { type: "GROWTH", title: "Built to be found by the right people", detail: "SEO + landing page concept", color: "project-sand", mark: "GROWTH LAB" }
];

const faqs = [
  ["What types of businesses do you work with?", "We partner with startups, small businesses, and growing teams that want a stronger digital presence. We shape the scope around your goals, audience, and stage of growth."],
  ["Can you redesign my existing website?", "Yes. We can review your current site, identify opportunities to improve its experience and performance, and plan a redesign that better supports your business."],
  ["Do you offer ongoing support after launch?", "We can discuss ongoing maintenance, updates, SEO, and marketing support based on the needs of your project."],
  ["How do I get a project estimate?", "Share a little about your business, what you need, and your goals using the inquiry form. We can then discuss a suitable scope and next steps."]
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Digitonix Experts home">
      <img className="brand-logo" src="/de-logo.webp?v=2" alt="Digitonix Experts" />
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="top">
      <div className="announcement"><span className="status-dot" /> DIGITAL PARTNERS FOR AMBITIOUS BUSINESSES <span className="announcement-right">SERVING CLIENTS ACROSS THE UNITED STATES</span></div>
      <SiteHeader />

      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> YOUR IDEAS. OUR DIGITAL EXPERTISE.</div>
            <h1>Make your next<br /><span>digital move</span><br />your best one.</h1>
            <p className="hero-lede">We help businesses build a stronger online presence with smart strategy, standout creative, and digital experiences designed to move them forward.</p>
            <div className="hero-actions">
              <a className="button button-blue" href="#contact">Start a project <Arrow diagonal /></a>
              <a className="text-link" href="#services">Explore what we do <Arrow /></a>
            </div>
            <div className="hero-proof"><div className="proof-avatars"><span>D</span><span>X</span><span>+</span></div><p><strong>One team. More possibilities.</strong><br />Strategy, creativity, and technology under one roof.</p></div>
          </div>
          <div className="hero-art" aria-label="Abstract blue digital design illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-glow" />
            <div className="hero-card card-main"><div className="card-top"><span className="mini-logo">DX</span><span>CREATIVE / DIGITAL</span><span className="card-dots">•••</span></div><div className="hero-card-title">Ideas into<br /><em>impact.</em></div><div className="card-bars"><i /><i /><i /></div><div className="card-bottom"><span>DESIGN WITH PURPOSE</span><span>01 — 08</span></div></div>
            <div className="float-chip chip-one"><span className="chip-icon">✳</span><span><b>Built around you</b><small>Strategy first</small></span></div>
            <div className="float-chip chip-two"><span className="chip-icon">↗</span><span><b>Made to perform</b><small>Growth minded</small></span></div>
            <div className="hero-stamp">DX<br /><small>EXPERTS</small></div>
          </div>
        </div>
        <div className="container hero-foot"><span>CREATIVE THINKING</span><span>×</span><span>TECHNICAL PRECISION</span><span>×</span><span>MEASURABLE PROGRESS</span><span className="scroll-cue">SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>YOUR DIGITAL GROWTH TEAM</span><b>DESIGN</b><i>✳</i><b>DEVELOPMENT</b><i>✳</i><b>MARKETING</b><i>✳</i><b>STRATEGY</b></div></section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading split-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> WHAT WE DO</div><h2>Everything you need<br />to <span>stand out online.</span></h2></div><p>From the first spark of an idea to the next stage of growth, we bring the right mix of creative and technical expertise to your corner.</p></div>
          <div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><span className="service-arrow"><Arrow diagonal /></span></div><div className="service-tag">{service.tag}</div><h3>{service.title}</h3><p>{service.text}</p><a href={"/services/" + service.slug} className="service-link">Explore service <Arrow /></a></article>)}</div>
          <div className="services-bottom"><span>NOT SURE WHERE TO START?</span><a href="#contact">Tell us what you’re working on <Arrow diagonal /></a></div>
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="container about-grid">
          <div className="about-visual"><div className="about-panel"><div className="about-panel-top"><span>DX / OUR MINDSET</span><span>EST. FOR WHAT’S NEXT</span></div><div className="about-monogram">D<span>X</span></div><div className="about-panel-bottom"><span>THINK CLEAR.</span><span>BUILD BOLD.</span><span>MOVE FORWARD.</span></div></div><div className="about-note"><span className="note-star">✳</span><p>Good digital work<br /><b>starts with listening.</b></p></div></div>
          <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT US</div><h2>More than a service provider.<br /><span>A team in your corner.</span></h2><p className="about-lede">At Digitonix Experts, we believe your digital presence should do more than look good. It should make your business easier to discover, trust, and choose.</p><p>That’s why we bring strategy, design, development, and marketing together—so every part of your online presence works toward the same goal. Clear thinking, collaborative work, and solutions shaped around your business come first.</p><a className="button button-outline" href="#contact">Get to know us <Arrow diagonal /></a></div>
        </div>
      </section>

      <section className="section approach-section" id="work">
        <div className="container">
          <div className="section-heading split-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> HOW WE WORK</div><h2>A clear path from<br /><span>idea to impact.</span></h2></div><p>Great outcomes come from a thoughtful process. We keep collaboration close and every step connected to the bigger picture.</p></div>
          <div className="process-grid"><article><span className="process-number">01</span><div className="process-icon">⌕</div><h3>Discover</h3><p>We learn about your business, audience, challenges, and what success should look like.</p></article><article><span className="process-number">02</span><div className="process-icon">✳</div><h3>Plan & create</h3><p>We shape the strategy, creative direction, and practical plan for your project.</p></article><article><span className="process-number">03</span><div className="process-icon">⌘</div><h3>Build & refine</h3><p>We bring the work to life, share progress, and refine the details together.</p></article><article><span className="process-number">04</span><div className="process-icon">↗</div><h3>Launch & grow</h3><p>We help you move forward with a launch plan and opportunities for what comes next.</p></article></div>
        </div>
      </section>

      <section className="work-section section">
        <div className="container">
          <div className="section-heading split-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> THE POSSIBILITIES</div><h2>Work that works<br /><span>for your business.</span></h2></div><p>Every project is different. Here’s a glimpse of the kind of thoughtful digital experiences we can create together.</p></div>
          <div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className={"project-art " + project.color}><div className="project-art-top"><span>{project.type}</span><span>0{index + 1} / 03</span></div><div className="project-art-center"><span>{project.mark}</span><strong>{index === 0 ? "GOOD THINGS ARE IN STORE." : index === 1 ? "MAKE ROOM FOR BETTER." : "GROW WITH INTENTION."}</strong><i>↗</i></div><div className="project-art-bottom"><span>CONCEPT PREVIEW</span><span>DX STUDIO</span></div></div><div className="project-caption"><div><h3>{project.title}</h3><p>{project.detail}</p></div><span className="project-link">↗</span></div></article>)}</div>
          <p className="portfolio-note">Illustrative concepts shown. Ask us about work relevant to your industry and goals.</p>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> READY WHEN YOU ARE</div><h2>Your next big idea<br />deserves a <em>great team.</em></h2></div><a className="button button-white" href="#contact">Let’s make it happen <Arrow diagonal /></a><div className="cta-orb" /></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-grid"><div><div className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</div><h2>A few things<br /><span>you might be wondering.</span></h2><p>Have a question we haven’t covered? Tell us what’s on your mind.</p><a className="text-link" href="#contact">Ask us directly <Arrow /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item faq-active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><i>{openFaq === index ? "−" : "+"}</i></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="contact-section section" id="contact"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LET’S START A CONVERSATION</div><h2>Tell us what<br />you’re <em>building.</em></h2><p>Have a project in mind, a challenge to solve, or just want to explore what’s possible? We’d love to hear from you.</p><div className="contact-promise"><span>✳</span><p><b>No pressure. Just a good conversation.</b><small>Share a few details and we’ll take it from there.</small></p></div><div className="contact-coordinates"><span>DIGITONIX EXPERTS</span><span>UNITED STATES · WORKING WORLDWIDE</span></div></div><div className="contact-form-wrap"><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-heading"><span>PROJECT INQUIRY</span><span>LET’S TALK ↗</span></div>{submitted ? <div className="form-success"><span>✓</span><h3>Thanks for reaching out.</h3><p>Your inquiry details are ready. Please connect your business email to activate message delivery on this form.</p><button type="button" className="button button-blue" onClick={() => setSubmitted(false)}>Send another inquiry</button></div> : <><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label><label>What do you need help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}<option>Not sure yet</option></select></label><label>Tell us a little about your project<textarea name="message" rows={4} placeholder="A few details about your goals, timeline, or ideas..." /></label><button className="button button-blue form-submit" type="submit">Send project inquiry <Arrow diagonal /></button><p className="form-privacy">Your details are only for discussing your project.</p></>}</form></div></div></section>

      <footer className="site-footer"><div className="container footer-main"><div><BrandMark /><p className="footer-tagline">Digital solutions that move<br />your business forward.</p></div><div className="footer-links"><span>EXPLORE</span><a href="#services">Services</a><a href="#about">About us</a><a href="#work">Our approach</a><a href="#faq">FAQs</a><a href="/contact">Contact Us</a><a href="/privacy-policy">Privacy Policy</a></div><div className="footer-links"><span>OUR SERVICES</span><a href="/services/website-development">Website development</a><a href="/services/shopify-development">Shopify development</a><a href="/services/seo">SEO & marketing</a><a href="/services/branding">Branding</a></div><div className="footer-contact"><span>HAVE A PROJECT?</span><a href="#contact">Let’s talk <Arrow diagonal /></a><small>Serving ambitious businesses across the United States.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><span>BUILT WITH INTENTION. <b>DX.</b></span><a href="/privacy-policy">PRIVACY POLICY</a><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
