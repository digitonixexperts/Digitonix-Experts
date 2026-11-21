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
          <div className="hero-art hero-video-art" aria-label="Technology and laptop video">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-label="Technology, laptop and work video">
              <source src="https://cdn.pixabay.com/video/2025/04/23/273921_large.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-shade" />
            <div className="hero-image-caption"><span className="image-live-dot" /> DIGITAL IDEAS. CONNECTED.</div>
          </div>
        </div>
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
          <div className="about-visual"><div className="about-office-photo"><img src="data:image/jpeg;base64,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" alt="Digitonix Experts office interior and team workspace" loading="lazy" /><div className="about-photo-label"><span className="note-star">✳</span><p>Good digital work<br /><b>starts with listening.</b></p></div></div></div>
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
