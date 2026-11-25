"use client";

import { useState } from "react";
import Link from "next/link";

const serviceGroups = [
  { title: "Logo Design", slug: "logo-design", children: [] },
  { title: "Web Design", slug: "web-design", children: [] },
  { title: "CMS Development", slug: "cms-development", children: [
    ["Ecommerce Development","ecommerce-development"],["WordPress Development","wordpress-development"],["Shopify Development","shopify-development"],["Wix Development","wix-development"],["Squarespace Development","squarespace-development"],["Website Redesign","website-redesign"],["Website Maintenance","website-maintenance"],["Webflow Development","webflow-development"]
  ]},
  { title: "Digital Marketing", slug: "digital-marketing", children: [
    ["Social Media Marketing","social-media-marketing"],["SEO","seo"]
  ]},
  { title: "Custom Development", slug: "frontend-development", children: [
    ["Frontend Development","frontend-development"],["Backend Development","backend-development"],["AI Integration","ai-integration"],["MERN Stack Development","mern-stack-development"],["LAMP Stack Development","lamp-stack-development"]
  ]},
  { title: "App Development", slug: "app-development", children: [
    ["Mobile App Development","mobile-app-development"],["Web App Development","web-app-development"]
  ]},
  { title: "Hosting & Domain Services", slug: "hosting-domain-services", children: [
    ["Domain Registration","domain-registration"],["Domain Transfer","domain-transfer"],["Managed Web Hosting","managed-web-hosting"],["Website Migration","website-migration"],["VPS & Dedicated Servers","vps-dedicated-servers"],["Email Hosting","email-hosting"],["SSL Certificates","ssl-certificates"],["Server Management","server-management"],["DevOps Services","devops-services"]
  ] },
  { title: "Brand Identity", slug: "brand-identity", children: [
    ["Brand Identity","brand-identity"],["Branding","branding"],["Brand Strategy","brand-strategy"],["Brand Voice","brand-voice"]
  ]},
  { title: "Graphic Design", slug: "graphic-design", children: [
    ["Social Media Design","social-media-design"],["Marketing Collateral Design","marketing-collateral-design"],["Brochure & Flyer Design","brochure-flyer-design"],["Presentation Design","presentation-design"],["Infographic Design","infographic-design"]
  ]},
  { title: "Content Writing", slug: "content-writing", children: [
    ["Website Content","website-content"],["Blog Writing","blog-writing"],["SEO Content Writing","seo-content-writing"],["Website Copywriting","website-copywriting"],["Product Description Writing","product-description-writing"],["Social Media Content","social-media-content-writing"],["Email Copywriting","email-copywriting"]
  ] }
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const close = () => { setMenuOpen(false); setActiveCategory(null); setServicesOpen(false); };
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Digitonix Experts home" onClick={close}>
          <img className="brand-logo" src="/digitonix-logo.svg" alt="Digitonix Experts" />
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/about" onClick={close}>About Us</Link>
          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger" type="button" aria-haspopup="true" aria-expanded={activeCategory !== null} onClick={() => setServicesOpen(!servicesOpen)}>Services <span aria-hidden="true">⌄</span></button>
            <div className="nav-dropdown-menu">
              {serviceGroups.map((group, index) => <div className={"service-menu-group" + (activeCategory === group.slug ? " category-active" : "")} key={group.slug}>
                <Link className="service-category-link" href={"/services/" + group.slug} onClick={close}><span>{group.title}</span>{group.children.length > 0 && <span className="dropdown-arrow">›</span>}</Link>
                {group.children.length > 0 && <button className="service-category-toggle" type="button" aria-label={"Show " + group.title + " services"} onClick={() => setActiveCategory(activeCategory === group.slug ? null : group.slug)}>›</button>}
                {group.children.length > 0 && <div className="service-submenu">{group.children.map(([title, slug]) => <Link href={"/services/" + slug} onClick={close} key={slug}>{title}<span>↗</span></Link>)}</div>}
              </div>)}
            </div>
          </div>
          <Link href="/locations" onClick={close}>Locations</Link>
          <Link href="/case-studies" onClick={close}>Case Studies</Link>
          <Link href="/packages" onClick={close}>Packages</Link>
          <Link href="/portfolio" onClick={close}>Portfolio</Link>
          <Link href="/blog" onClick={close}>Blog</Link>
          <Link className="mobile-contact-link" href="/contact" onClick={close}>Contact Us</Link>
        </nav>
        <Link className="button button-dark nav-cta" href="/contact">Contact Us <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
