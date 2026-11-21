"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  ["Website Development", "website-development"],
  ["WordPress Development", "wordpress-development"],
  ["Shopify Development", "shopify-development"],
  ["Search Engine Optimization", "seo"],
  ["Digital Marketing", "digital-marketing"],
  ["Graphic Design", "graphic-design"],
  ["Branding", "branding"],
  ["App Development", "app-development"]
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Digitonix Experts home" onClick={close}>
          <img className="brand-logo" src="/de-logo.webp?v=2" alt="Digitonix Experts" />
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <Link href="/" onClick={close}>Home</Link>
          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger" type="button" aria-haspopup="true">Services <span aria-hidden="true">⌄</span></button>
            <div className="nav-dropdown-menu">
              {services.map(([title, slug], index) => <Link href={"/services/" + slug} onClick={close} key={slug}><span className="dropdown-number">0{index + 1}</span>{title}<span className="dropdown-arrow" aria-hidden="true">↗</span></Link>)}
            </div>
          </div>
          <Link href="/#about" onClick={close}>About</Link>
          <Link href="/#work" onClick={close}>Our Approach</Link>
          <Link href="/#faq" onClick={close}>FAQs</Link>
          <Link className="mobile-contact-link" href="/contact" onClick={close}>Contact Us</Link>
        </nav>
        <Link className="button button-dark nav-cta" href="/contact">Contact Us <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
