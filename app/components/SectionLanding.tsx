import Link from "next/link";
import SiteHeader from "./SiteHeader";

type PageData = {
  eyebrow: string; title: string; accent: string; intro: string;
  sectionTitle: string; sectionAccent: string; sectionText: string;
  cards: { number: string; title: string; text: string }[];
  closing: string;
};
export default function SectionLanding({data}:{data:PageData}) {
  return <main className="section-landing">
    <div className="announcement"><span className="status-dot" /> DIGITAL PARTNERS FOR AMBITIOUS BUSINESSES <span className="announcement-right">SERVING CLIENTS ACROSS THE UNITED STATES</span></div>
    <SiteHeader />
    <section className="section-landing-hero"><div className="container">
      <div className="eyebrow"><span className="eyebrow-line" /> {data.eyebrow}</div>
      <div className="section-landing-grid"><div><h1>{data.title}<br/><span>{data.accent}</span></h1><p>{data.intro}</p><div className="hero-actions"><Link className="button button-blue" href="/contact">Talk about your project <span>↗</span></Link><Link className="text-link" href="/services">Explore our services →</Link></div></div>
      <div className="landing-art"><span className="landing-art-top">DIGITONIX EXPERTS / DX</span><span className="landing-art-mark">DX</span><span className="landing-art-bottom">STRATEGY · DESIGN · DEVELOPMENT</span></div></div>
    </div></section>
    <section className="section landing-content"><div className="container">
      <div className="landing-section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> {data.sectionTitle.toUpperCase()}</div><h2>{data.sectionAccent}</h2></div><p>{data.sectionText}</p></div>
      <div className="landing-cards">{data.cards.map((card)=><article className="landing-card" key={card.number}><span>{card.number}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>
    </div></section>
    <section className="inner-cta"><div className="container inner-cta-row"><div><div className="eyebrow"><span className="eyebrow-line"/> READY TO GET STARTED?</div><h2>{data.closing}<br/><span>Let’s move it forward.</span></h2></div><Link className="button button-blue" href="/contact">Contact our team ↗</Link></div></section>
    <footer className="site-footer"><div className="container footer-main"><div><p className="footer-tagline">Digital solutions that move<br/>your business forward.</p></div><div className="footer-links"><span>EXPLORE</span><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/contact">Contact Us</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div className="footer-contact"><span>HAVE A PROJECT?</span><Link href="/contact">Let’s talk ↗</Link><small>Serving ambitious businesses across the United States.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><span>BUILT WITH INTENTION. <b>DX.</b></span><Link href="/privacy-policy">PRIVACY POLICY</Link><Link href="#top">BACK TO TOP ↑</Link></div></footer>
  </main>;
}
