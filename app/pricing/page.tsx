"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

type Plan = { name: string; price: string; cadence?: string; featured?: boolean; features: string[] };
type Category = { name: string; note: string; plans: Plan[] };

const categories: Category[] = [
  { name: "Logo Design", note: "Distinctive logo concepts and production-ready brand assets.", plans: [
    { name: "Starter", price: "$99", features: ["1 original logo concept", "Color and monochrome versions", "High-resolution PNG and JPG", "Commercial usage files"] },
    { name: "Professional", price: "$199", featured: true, features: ["2 original logo concepts", "Refined typography and color direction", "Multiple revision rounds", "Vector and source file delivery"] },
    { name: "Business", price: "$299", features: ["3 original logo concepts", "Business card and stationery design", "Social profile logo variations", "Complete vector and source files"] }
  ]},
  { name: "Illustration", note: "Custom illustration work for products, campaigns, and digital experiences.", plans: [
    { name: "Basic", price: "$294", features: ["3 custom design concepts", "2 designer directions", "Up to 3 revision rounds", "Web-ready final files"] },
    { name: "Startup", price: "$394", featured: true, features: ["4 custom design concepts", "3 designer directions", "Expanded refinement rounds", "AI, PSD, EPS, PNG and PDF files"] },
    { name: "Professional", price: "$594", features: ["Flexible concept exploration", "Dedicated creative direction", "Detailed illustration finish", "Editable source files and usage rights"] }
  ]},
  { name: "Website Design", note: "Responsive websites with clear content structure and conversion-focused layouts.", plans: [
    { name: "Starter", price: "$149", features: ["Custom homepage concept", "3 inner pages", "Contact form and 1 banner", "Basic on-page SEO setup"] },
    { name: "Professional", price: "$399", featured: true, features: ["2 homepage concepts", "5 inner pages", "3 custom banners", "Responsive design and sitemap"] },
    { name: "Business", price: "$899", features: ["3 homepage concepts", "Up to 10 inner pages", "CMS integration", "Landing page and social integrations"] }
  ]},
  { name: "CMS & WordPress", note: "Manageable content platforms tailored to your team's workflow.", plans: [
    { name: "Essential", price: "$399", features: ["WordPress installation and setup", "Theme styling and configuration", "Up to 5 core pages", "Responsive layouts"] },
    { name: "Advanced", price: "$899", featured: true, features: ["Custom page templates", "CMS and plugin configuration", "Up to 10 core pages", "Forms, analytics and SEO foundations"] },
    { name: "Custom CMS", price: "$2,499", features: ["Custom content architecture", "Advanced roles and workflows", "Custom integrations", "QA and launch support"] }
  ]},
  { name: "E-commerce Website", note: "Online stores designed to make product discovery and checkout easier.", plans: [
    { name: "Starter", price: "$599", features: ["Store setup and custom homepage", "Up to 100 products", "Up to 7 categories", "Cart and payment gateway setup"] },
    { name: "Professional", price: "$1,299", featured: true, features: ["Up to 250 products", "Customer accounts and reviews", "Shipping and payment integrations", "Promotions and product filters"] },
    { name: "Business", price: "$2,699", features: ["Up to 1,000 products", "Advanced inventory and order tools", "Multi-currency options", "Email marketing and analytics setup"] }
  ]},
  { name: "Web Applications", note: "Purpose-built browser applications, dashboards, and workflow tools.", plans: [
    { name: "Basic", price: "$2,499", features: ["Custom interactive design", "Core application workflows", "Responsive interface", "Deployment and handover"] },
    { name: "Standard", price: "$3,499", featured: true, features: ["Custom CMS and UI design", "Process automation tools", "Third-party integrations", "Expanded application functionality"] },
    { name: "Enterprise", price: "$6,999", features: ["Advanced custom development", "Complex workflows and roles", "Scalable architecture planning", "Dedicated project coordination"] }
  ]},
  { name: "Web Portals", note: "Member, customer, booking, and business portals with secure user experiences.", plans: [
    { name: "Startup Portal", price: "$4,000", features: ["One portal type and core journey", "User signup and dashboard", "Custom interface and admin tools", "Deployment and source handover"] },
    { name: "Portal Plus", price: "$7,000", featured: true, features: ["Expanded portal functionality", "Database and API integrations", "Role-based user experiences", "Advanced admin capabilities"] },
    { name: "Enterprise Portal", price: "Custom", features: ["Complex multi-role systems", "Custom modules and integrations", "Scale and security planning", "Scope-based delivery roadmap"] }
  ]},
  { name: "Mobile App Development", note: "Mobile product experiences planned around your users and platform needs.", plans: [
    { name: "MVP", price: "Custom", features: ["Feature and user-flow planning", "Core screens and interactions", "Platform recommendation", "MVP delivery roadmap"] },
    { name: "Growth App", price: "Custom", featured: true, features: ["Expanded app functionality", "API and backend integration", "Testing and release preparation", "Analytics-ready structure"] },
    { name: "Enterprise App", price: "Custom", features: ["Complex workflows and roles", "Scalable backend architecture", "Advanced integrations", "Ongoing support options"] }
  ]},
  { name: "Website Maintenance", note: "Ongoing care to keep your website updated, secure, and running smoothly.", plans: [
    { name: "Starter", price: "$49", cadence: "/ month", features: ["Content and small feature updates", "Website backups and version updates", "Security checks", "Bug fixes"] },
    { name: "Advanced", price: "$69", cadence: "/ month", featured: true, features: ["Everything in Starter", "Broken-link checks", "Speed optimization", "SEO-friendly image checks"] },
    { name: "Premium", price: "$149", cadence: "/ month", features: ["Everything in Advanced", "Hosting and domain support", "New pages and feature updates", "Priority technical assistance"] }
  ]},
  { name: "Hosting & Domain", note: "Infrastructure, domain, email, and server support sized to your setup.", plans: [
    { name: "Domain Services", price: "Custom", features: ["Domain registration assistance", "Domain transfer coordination", "DNS configuration guidance", "Renewal and ownership support"] },
    { name: "Managed Hosting", price: "Custom", featured: true, features: ["Hosting setup and migration", "SSL and business email setup", "Backup and uptime planning", "Performance configuration"] },
    { name: "Servers & DevOps", price: "Custom", features: ["VPS and dedicated server setup", "Server management", "Deployment automation", "Monitoring and maintenance options"] }
  ]},
  { name: "SEO", note: "Search optimization built around technical health, relevant content, and visibility.", plans: [
    { name: "Startup", price: "$350", cadence: "/ month", features: ["Website and technical audit", "15 target keywords", "10-page on-page optimization", "SEO roadmap and reporting"] },
    { name: "Growth", price: "$700", cadence: "/ month", featured: true, features: ["35 target keywords", "15-page optimization", "Competitor and content analysis", "Tracking and monthly reporting"] },
    { name: "Venture", price: "$1,200", cadence: "/ month", features: ["60+ target keywords", "30-page optimization", "Advanced technical recommendations", "Ongoing reporting and support"] }
  ]},
  { name: "Video & Animation", note: "Motion, explainers, and animation that make your message memorable.", plans: [
    { name: "Starter", price: "$195", features: ["15-second video", "Script and storyboard", "Voice-over and sound effects", "Animation and revisions"] },
    { name: "Classic", price: "$399", featured: true, features: ["30-second video", "Professional scriptwriting", "Custom storyboard", "Voice-over and animation"] },
    { name: "Premium", price: "$999", features: ["Up to 120-second video", "Full creative direction", "Voice-over and sound design", "Animation and final export"] }
  ]},
  { name: "Social Media", note: "Consistent social content and campaign support for your brand.", plans: [
    { name: "Startup", price: "$299", cadence: "/ month", features: ["Facebook and Instagram", "12 designed posts with copy", "Content calendar", "Audit and recommendations"] },
    { name: "Pro", price: "$499", cadence: "/ month", featured: true, features: ["15 designed posts with copy", "Social strategy and competitor review", "Monthly reporting", "One campaign setup"] },
    { name: "Elite", price: "$1,399", cadence: "/ month", features: ["3 social channels", "18 designed posts with copy", "Community management", "Campaign setup and A/B testing"] }
  ]},
  { name: "PPC Advertising", note: "Paid campaign management focused on useful measurement and optimization.", plans: [
    { name: "Basic", price: "$299", cadence: "/ month", features: ["One ad network", "Campaign and keyword setup", "Conversion tracking", "Budget and performance reports"] },
    { name: "Pro", price: "$839", cadence: "/ month", featured: true, features: ["Two ad networks", "Expanded keyword and ad groups", "Bid and ROI optimization", "Conversion reporting"] },
    { name: "Elite", price: "$1,399", cadence: "/ month", features: ["Multi-network campaign support", "Advanced analytics setup", "Landing page consultation", "A/B testing and optimization"] }
  ]},
  { name: "Online Reputation", note: "Reputation monitoring and practical brand presence support.", plans: [
    { name: "Basic ORM", price: "$999", cadence: "/ month", features: ["2 brand phrases monitored", "2 social channels", "Business listing and review support", "Activity reporting"] },
    { name: "Business ORM", price: "$1,499", cadence: "/ month", featured: true, features: ["3 brand phrases monitored", "3 social channels", "Expanded content and listing support", "Monthly reputation reporting"] },
    { name: "Enterprise ORM", price: "$1,999", cadence: "/ month", features: ["Broader brand monitoring", "Reputation response planning", "Expanded distribution support", "Ongoing reporting"] }
  ]},
  { name: "Content Writing", note: "Clear, useful copy for websites, blogs, and customer journeys.", plans: [
    { name: "Single Page", price: "$50", cadence: "/ page", features: ["One page of website copy", "Audience-focused messaging", "Clear calls to action", "One refinement round"] },
    { name: "Content Set", price: "$500", featured: true, features: ["Up to 10 pages of copy", "Consistent brand voice", "Search-aware page structure", "Editorial refinement"] },
    { name: "Website Copy", price: "$1,000", cadence: " / up to 20 pages", features: ["Up to 20 pages of copy", "Content structure and messaging", "Search-aware writing", "Editorial refinement"] }
  ]},
  { name: "Brand Strategy", note: "Positioning and brand direction to help your business stand apart.", plans: [
    { name: "Foundation", price: "$199", features: ["Brand discovery session", "Audience and competitor review", "Positioning direction", "Actionable brand notes"] },
    { name: "Strategy", price: "$399", featured: true, features: ["Brand positioning framework", "Audience and market insights", "Messaging pillars", "Brand direction document"] },
    { name: "Brand System", price: "$799", features: ["Expanded brand strategy", "Voice and messaging direction", "Visual identity direction", "Practical brand guidelines"] }
  ]}
];

export default function PricingPage() {
  const [active, setActive] = useState(0);
  const selected = useMemo(() => categories[active], [active]);
  return <main className="pricing-page">
    <div className="announcement"><span className="status-dot" /> DIGITAL PARTNERS FOR AMBITIOUS BUSINESSES <span className="announcement-right">SERVING CLIENTS ACROSS THE UNITED STATES</span></div>
    <SiteHeader />
    <section className="pricing-hero"><div className="container">
      <div className="eyebrow"><span className="eyebrow-line" /> STRAIGHTFORWARD OPTIONS. THOUGHTFUL WORK.</div>
      <h1>Flexible pricing<br /><span>for your next move.</span></h1>
      <p>Explore service packages designed to give your project a clear starting point. Choose a category to compare deliverables and find the right fit for your goals.</p>
      <div className="pricing-meta"><span><b>16</b> service categories</span><i /> <span>USD pricing</span><i /> <span>Clear package details</span></div>
    </div></section>
    <section className="pricing-catalog"><div className="container">
      <div className="pricing-section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> EXPLORE PACKAGES</div><h2>Find the right <span>plan for you.</span></h2></div><p>Every project is different. These packages are starting points; final scope and quote are confirmed after we understand your requirements.</p></div>
      <div className="pricing-tabs" role="tablist" aria-label="Pricing categories">
        {categories.map((category, index) => <button key={category.name} role="tab" aria-selected={active === index} className={active === index ? "pricing-tab active" : "pricing-tab"} onClick={() => setActive(index)}>{category.name}</button>)}
      </div>
      <div className="pricing-selected-heading"><div><span className="pricing-kicker">SELECTED SERVICE</span><h3>{selected.name}</h3><p>{selected.note}</p></div><span className="pricing-count">0{active + 1} <i>/ 16</i></span></div>
      <div className="pricing-cards" role="tabpanel">
        {selected.plans.map((plan) => <article className={"pricing-card" + (plan.featured ? " pricing-featured" : "")} key={plan.name}>
          <div className="pricing-card-top"><span className="pricing-plan-name">{plan.name}</span>{plan.featured && <span className="pricing-popular">POPULAR CHOICE</span>}</div>
          <div className="pricing-price">{plan.price}<small>{plan.cadence || (plan.price === "Custom" ? "scope based" : "one-time")}</small></div>
          <div className="pricing-rule" />
          <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
          <Link className="pricing-cta" href={"/contact?service=" + encodeURIComponent(selected.name + " - " + plan.name)}>Get Started <span>↗</span></Link>
        </article>)}
      </div>
      <p className="pricing-footnote">All prices are shown in USD. Advertising spend, paid software, hosting renewals, domain fees, and third-party subscriptions are separate unless specifically included in a written project scope.</p>
    </div></section>
    <section className="pricing-process"><div className="container pricing-process-inner"><div><div className="eyebrow"><span className="eyebrow-line" /> HOW IT WORKS</div><h2>Clear scope.<br /><span>Confident next steps.</span></h2></div><div className="pricing-process-steps"><div><b>01</b><h3>Choose a service</h3><p>Select the category and package closest to your needs.</p></div><div><b>02</b><h3>Share your goals</h3><p>Tell us about your audience, timeline, and requirements.</p></div><div><b>03</b><h3>Confirm your scope</h3><p>We’ll confirm deliverables, timing, and the final quote before work begins.</p></div></div></div></section>
    <section className="pricing-bottom-cta"><div className="container"><div><span>HAVE A PROJECT THAT NEEDS A CUSTOM SCOPE?</span><h2>Let’s build the right plan.</h2></div><Link className="button button-blue" href="/contact">Talk to our team ↗</Link></div></section>
    <footer className="site-footer"><div className="container footer-main"><div><p className="footer-tagline">Digital solutions that move<br />your business forward.</p></div><div className="footer-links"><span>EXPLORE</span><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/pricing">Pricing</Link><Link href="/packages">Packages</Link><Link href="/contact">Contact Us</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div className="footer-links"><span>OUR SERVICES</span><Link href="/services/website-development">Website development</Link><Link href="/services/shopify-development">Shopify development</Link><Link href="/services/seo">SEO & marketing</Link><Link href="/services/branding">Branding</Link></div><div className="footer-contact"><span>HAVE A PROJECT?</span><Link href="/contact">Let’s talk ↗</Link><small>Serving ambitious businesses across the United States.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><span>BUILT WITH INTENTION. <b>DX.</b></span><Link href="/privacy-policy">PRIVACY POLICY</Link><Link href="#top">BACK TO TOP ↑</Link></div></footer>
  </main>;
}
