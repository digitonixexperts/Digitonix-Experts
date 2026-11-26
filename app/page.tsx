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
  { type: "WEB DESIGN & DEVELOPMENT", title: "A website that works as hard as you do", detail: "Clear messaging, intuitive user experiences, and responsive development that guide visitors toward action.", statement: "MAKE A STRONG FIRST IMPRESSION.", color: "project-blue", mark: "YOUR DIGITAL FRONT DOOR", visual: "browser" },
  { type: "E-COMMERCE & SHOPIFY", title: "Turn great products into easier purchases", detail: "Thoughtful storefronts with smooth browsing, product discovery, and checkout experiences built for customers.", statement: "MAKE EVERY PRODUCT SHINE.", color: "project-lilac", mark: "A BETTER WAY TO SHOP", visual: "store" },
  { type: "SEO & DIGITAL MARKETING", title: "Get found by the people who need you", detail: "Search strategy and focused campaigns that build visibility, attract qualified visitors, and support sustainable growth.", statement: "BE SEEN. KEEP GROWING.", color: "project-sand", mark: "GROW WITH INTENTION", visual: "growth" }
];

const faqs = [
  ["What does branding include for my business?", "Branding can include your visual identity, logo direction, colors, typography, messaging, and the guidelines that help your business look and sound consistent. We shape the scope around what your brand needs."],
  ["Can you create a brand identity from scratch?", "Yes. We can help define a clear creative direction and build an identity that reflects your business, connects with your audience, and gives your brand a distinctive presence."],
  ["Can you refresh or rebrand an existing business?", "Absolutely. We can review what is already working, identify what needs to evolve, and create a refreshed identity while keeping the important parts of your brand recognizable."],
  ["Will my branding stay consistent across digital platforms?", "We design with consistency in mind, so your brand can carry through your website, social media, marketing materials, and other customer touchpoints."],
  ["How long does a branding project take?", "Timelines depend on the size and complexity of the project, the deliverables, and feedback rounds. Once we understand your goals, we can outline a realistic schedule."]
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Digitonix Experts home">
      <img className="brand-logo" src="/digitonix-logo.svg" alt="Digitonix Experts" />
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
            <div className="hero-proof"><div className="proof-avatars" aria-label="Business consultant team"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop&crop=faces" alt="Business consultant portrait" /><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces" alt="Business consultant portrait" /><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&fit=crop&crop=faces" alt="Business consultant portrait" /></div><p><strong>One team. More possibilities.</strong><br />Strategy, creativity, and technology under one roof.</p></div>
          </div>
          <div className="hero-art hero-video-art" aria-label="Technology and laptop video">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/digitonix-hero.svg" aria-label="Technology, laptop and work video">
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
          <div className="about-visual"><div className="about-office-photo"><img src="https://i.postimg.cc/zB24CTJN/Gemini-Generated-Image-gf8jx6gf8jx6gf8j.jpg" alt="Digitonix Experts office interior and team workspace" loading="lazy" /><div className="about-photo-label"><span className="note-star">✳</span><p>Good digital work<br /><b>starts with listening.</b></p></div></div></div>
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
          <div className="section-heading split-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> WHAT WE CAN DO FOR YOU</div><h2>Make your next move<br /><span>your best one yet.</span></h2></div><p>From your first website to your next stage of growth, we bring the right mix of strategy, design, and technology to help your business move forward.</p></div>
          <div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className={"project-art " + project.color}><div className="project-art-top"><span>{project.type}</span><span>0{index + 1} / 03</span></div><div className="project-art-center"><span>{project.mark}</span><strong>{project.statement}</strong></div><div className={"project-visual project-visual-" + project.visual} aria-hidden="true">{project.visual === "browser" ? <><div className="visual-browser-bar"><i></i><i></i><i></i><span>yourbrand.com</span></div><div className="visual-browser-body"><b>Ideas made<br/>clear.</b><small>Thoughtful digital experiences.</small><em>EXPLORE MORE ↗</em></div></> : project.visual === "store" ? <><div className="visual-store-head"><b>YOUR STORE</b><span>SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; BAG (0)</span></div><div className="visual-products"><i></i><i></i><i></i></div><div className="visual-store-foot">CURATED FOR YOU&nbsp; · &nbsp;NEW ARRIVALS</div></> : <><div className="visual-growth-label">YOUR REACH <b>↗</b></div><div className="visual-growth-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="visual-growth-foot"><b>+ GROWTH</b><span>BUILT OVER TIME</span></div></>}</div><div className="project-art-bottom"><span>BUILT AROUND YOUR GOALS</span><span>DX STUDIO</span></div></div><div className="project-caption"><div><h3>{project.title}</h3><p>{project.detail}</p></div><a className="project-link" href="#contact" aria-label={"Discuss " + project.type}>↗</a></div></article>)}</div>
          <div className="portfolio-note"><span>DX</span> STRATEGY FIRST <i>✳</i> MADE FOR YOUR BUSINESS <i>✳</i> FOCUSED ON REAL PROGRESS</div>
        </div>
      </section>


      <section className="section reviews-section" id="reviews">
        <div className="container">
          <div className="section-heading split-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> CLIENT FEEDBACK</div><h2>Good work.<br /><span>Thoughtful partnerships.</span></h2></div>
            <p>A preview of the kind of detailed feedback this section can showcase. These original-style examples are illustrative drafts, not verified customer reviews.</p>
          </div>
          <div className="reviews-carousel" aria-label="Auto-scrolling illustrative testimonials">
            <div className="reviews-track">
              <article className="review-card review-slide"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" /><div><strong>Website project</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“We came in with a rough idea and a long list of things our website needed to do. The team helped us prioritize the important pages, tighten the messaging, and shape a design that feels much more like our business. The check-ins made the process easy to follow.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" /><div><strong>E-commerce project</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“Our store had grown over time and the customer journey was starting to feel cluttered. The team mapped out a simpler shopping flow and a more consistent product layout. I appreciated that the recommendations were explained in plain English.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" /><div><strong>Business strategy</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“I liked that the conversations started with our goals rather than jumping straight into design. The recommendations were practical, the milestones were clear, and we always knew what the next step was. It felt like a thoughtful working partnership.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" /><div><strong>Brand identity</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“We had a logo and a few scattered ideas, but no consistent visual direction. The sample brand direction brought the colors, typography, and tone together in a way that gave our team a clearer starting point.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" /><div><strong>Startup website</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“As an early-stage business, we needed someone to help separate the must-haves from the nice-to-haves. The team broke the project into manageable steps, answered our questions, and kept the scope focused.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide review-slide-copy"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" aria-hidden="true" /><div><strong>Website project</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“We came in with a rough idea and a long list of things our website needed to do. The team helped us prioritize the important pages, tighten the messaging, and shape a design that feels much more like our business. The check-ins made the process easy to follow.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide review-slide-copy"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" aria-hidden="true" /><div><strong>E-commerce project</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“Our store had grown over time and the customer journey was starting to feel cluttered. The team mapped out a simpler shopping flow and a more consistent product layout. I appreciated that the recommendations were explained in plain English.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide review-slide-copy"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" aria-hidden="true" /><div><strong>Business strategy</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“I liked that the conversations started with our goals rather than jumping straight into design. The recommendations were practical, the milestones were clear, and we always knew what the next step was. It felt like a thoughtful working partnership.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide review-slide-copy"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" aria-hidden="true" /><div><strong>Brand identity</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“We had a logo and a few scattered ideas, but no consistent visual direction. The sample brand direction brought the colors, typography, and tone together in a way that gave our team a clearer starting point.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
              <article className="review-card review-slide review-slide-copy"><div className="review-card-top"><img className="review-photo" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80" alt="Illustrative profile portrait" loading="lazy" aria-hidden="true" /><div><strong>Startup website</strong><small>Illustrative client profile</small></div></div><div className="review-stars" aria-label="Illustrative five star rating">★★★★★</div><p>“As an early-stage business, we needed someone to help separate the must-haves from the nice-to-haves. The team broke the project into manageable steps, answered our questions, and kept the scope focused.”</p><div className="review-card-foot"><span>SAMPLE REVIEW</span><span>5.0 ★</span></div></article>
            </div>
          </div>
          <p className="reviews-disclaimer">ILLUSTRATIVE SAMPLE REVIEWS — fictional draft copy and portrait imagery for layout preview only. Replace with genuine, permission-approved customer feedback before publication as testimonials.</p>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> READY WHEN YOU ARE</div><h2>Your next big idea<br />deserves a <em>great team.</em></h2></div><a className="button button-white" href="#contact">Let’s make it happen <Arrow diagonal /></a><div className="cta-orb" /></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-grid"><div><div className="eyebrow"><span className="eyebrow-line" /> BRANDING & IDENTITY</div><h2>Frequently<br /><span>Asked Questions.</span></h2><p>Want to build a brand people recognize and remember? Here are a few helpful answers to get you started.</p><a className="text-link" href="#contact">Talk about your brand <Arrow /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item faq-active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><i>{openFaq === index ? "−" : "+"}</i></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="contact-section section" id="contact"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> LET’S START A CONVERSATION</div><h2>Tell us what<br />you’re <em>building.</em></h2><p>Have a project in mind, a challenge to solve, or just want to explore what’s possible? We’d love to hear from you.</p><div className="contact-promise"><span>✳</span><p><b>No pressure. Just a good conversation.</b><small>Share a few details and we’ll take it from there.</small></p></div><div className="contact-coordinates"><span>DIGITONIX EXPERTS</span><span>UNITED STATES · WORKING WORLDWIDE</span></div></div><div className="contact-form-wrap"><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="form-heading"><span>PROJECT INQUIRY</span><span>LET’S TALK ↗</span></div>{submitted ? <div className="form-success"><span>✓</span><h3>Thanks for reaching out.</h3><p>Your inquiry details are ready. Please connect your business email to activate message delivery on this form.</p><button type="button" className="button button-blue" onClick={() => setSubmitted(false)}>Send another inquiry</button></div> : <><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label><label>What do you need help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}<option>Not sure yet</option></select></label><label>Tell us a little about your project<textarea name="message" rows={4} placeholder="A few details about your goals, timeline, or ideas..." /></label><button className="button button-blue form-submit" type="submit">Send project inquiry <Arrow diagonal /></button><p className="form-privacy">Your details are only for discussing your project.</p></>}</form></div></div></section>

      <footer className="site-footer"><div className="container footer-main"><div><p className="footer-tagline">Digital solutions that move<br />your business forward.</p></div><div className="footer-links"><span>EXPLORE</span><a href="#services">Services</a><a href="#about">About us</a><a href="#work">Our approach</a><a href="#faq">FAQs</a><a href="#reviews">Reviews</a><a href="/contact">Contact Us</a><a href="/privacy-policy">Privacy Policy</a></div><div className="footer-links"><span>OUR SERVICES</span><a href="/services/website-development">Website development</a><a href="/services/shopify-development">Shopify development</a><a href="/services/seo">SEO & marketing</a><a href="/services/branding">Branding</a></div><div className="footer-contact"><span>HAVE A PROJECT?</span><a href="#contact">Let’s talk <Arrow diagonal /></a><small>Serving ambitious businesses across the United States.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><span>BUILT WITH INTENTION. <b>DX.</b></span><a href="/privacy-policy">PRIVACY POLICY</a><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
