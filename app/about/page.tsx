import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="inner-page" id="top">
      <div className="announcement"><span className="status-dot" /> DIGITAL PARTNERS FOR AMBITIOUS BUSINESSES <span className="announcement-right">SERVING CLIENTS ACROSS THE UNITED STATES</span></div>
      <SiteHeader />
      <section className="inner-hero about-page-hero">
        <div className="container inner-hero-grid">
          <div><div className="eyebrow"><span className="eyebrow-line" /> ABOUT DIGITONIX EXPERTS</div><h1>Good ideas deserve<br/><span>great digital partners.</span></h1><p>We bring strategy, creativity, and technology together to help businesses build a stronger, more confident presence online.</p><Link className="button button-blue" href="/contact">Let’s work together <span>↗</span></Link></div>
          <div className="inner-hero-image"><img src="https://i.postimg.cc/zB24CTJN/Gemini-Generated-Image-gf8jx6gf8jx6gf8j.jpg" alt="Digitonix Experts office and collaborative workspace"/></div>
        </div>
      </section>
      <section className="section inner-story"><div className="container inner-story-grid"><div><div className="eyebrow"><span className="eyebrow-line"/> WHO WE ARE</div><h2>More than a service provider.<br/><span>A team in your corner.</span></h2></div><div><p className="inner-lede">At Digitonix Experts, we believe your digital presence should do more than look good. It should make your business easier to discover, trust, and choose.</p><p>That’s why we bring website development, e-commerce, branding, design, SEO, and digital marketing together under one roof. We take time to understand your goals, shape a thoughtful plan, and create digital experiences that support meaningful business progress.</p></div></div></section>
      <section className="inner-values"><div className="container"><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> WHAT GUIDES US</div><h2>Good work starts with<br/><em>the right approach.</em></h2><div className="inner-values-grid"><article><b>01</b><h3>Listen first</h3><p>We start by understanding your business, audience, and what you want to achieve.</p></article><article><b>02</b><h3>Think clearly</h3><p>We connect creative ideas to practical strategy and purposeful execution.</p></article><article><b>03</b><h3>Build together</h3><p>We keep collaboration open and make every step feel considered and clear.</p></article></div></div></section>
      <section className="inner-cta"><div className="container inner-cta-row"><div><div className="eyebrow"><span className="eyebrow-line"/> READY TO GET STARTED?</div><h2>Let’s make something<br/><span>that moves you forward.</span></h2></div><Link className="button button-blue" href="/contact">Tell us about your project ↗</Link></div></section>
      <footer className="site-footer"><div className="container footer-main"><div><p className="footer-tagline">Digital solutions that move<br/>your business forward.</p></div><div className="footer-links"><span>EXPLORE</span><Link href="/">Home</Link><Link href="/about">About us</Link><Link href="/contact">Contact Us</Link><Link href="/#services">Services</Link><Link href="/pricing">Pricing</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div className="footer-contact"><span>HAVE A PROJECT?</span><Link href="/contact">Let’s talk ↗</Link><small>Serving ambitious businesses across the United States.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><span>BUILT WITH INTENTION. <b>DX.</b></span><Link href="/privacy-policy">PRIVACY POLICY</Link><Link href="#top">BACK TO TOP ↑</Link></div></footer>
    </main>
  );
}
