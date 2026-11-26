"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

type Plan = { name: string; price: string; cadence?: string; featured?: boolean; features: string[] };
type Category = { name: string; note: string; plans: Plan[] };

const categories: Category[] = [
  { name: "Logo Design", note: "All logo design tiers from the reference package catalogue.", plans: [
    { name: "Starter Logo", price: "$99", features: ["1 logo concept", "Unlimited revisions", "Color, black, white and gray versions", "Final files: PSD, PDF, AI, JPEG and PNG", "Ownership rights and source files", "Optional NDA"] },
    { name: "Professional Logo", price: "$199", featured: true, features: ["2 logo concepts", "Unlimited revisions", "Color, black, white and gray versions", "Final files: PSD, PDF, AI, JPEG and PNG", "Ownership rights and source files", "Optional NDA"] },
    { name: "Business Logo", price: "$299", features: ["3 logo concepts", "Unlimited revisions", "Stationery design", "Social media page designs", "Final files: PSD, PDF, AI, JPEG and PNG", "Ownership rights and source files"] }
  ]},
  { name: "Illustration", note: "Custom illustration packages and design deliverables.", plans: [
    { name: "Basic Illustrative", price: "$294", features: ["3 custom design concepts", "2 designers", "Unlimited revisions", "48–72 hour turnaround", "AI, PSD, EPS, PNG, GIF, JPG and PDF files", "Ownership and satisfaction guarantees"] },
    { name: "Startup Illustrative", price: "$394", featured: true, features: ["4 custom design concepts", "3 designers", "48–72 hour turnaround", "Unlimited revisions", "AI, PSD, EPS, PNG, GIF, JPG and PDF files", "Ownership and satisfaction guarantees"] },
    { name: "Professional Illustrative", price: "$594", features: ["Unlimited design concepts", "4 designers", "Unlimited revisions", "24–48 hour turnaround", "Ownership rights", "Unique design and money-back guarantees"] }
  ]},
  { name: "Website Design", note: "Six website design tiers, from starter websites to enterprise builds.", plans: [
    { name: "Starter", price: "$149", features: ["Custom homepage design (1 concept)", "3 custom inner pages", "3 premium stock photos and 1 banner", "Contact form and on-page SEO", "Cross-browser compatibility and W3C HTML", "Complete deployment; 48–72 hour turnaround", "Add-ons: responsive compatibility $149; CMS $199"] },
    { name: "Professional", price: "$399", featured: true, features: ["Custom homepage design (2 concepts)", "5 custom inner pages", "5 premium stock photos and 3 banners", "Animated slider banner and contact form", "On-page SEO, sitemap and security plugins", "Fast load time and complete deployment", "Add-ons: responsive compatibility $149; CMS $199"] },
    { name: "Business", price: "$899", features: ["Custom homepage design (3 concepts)", "10 custom inner pages and CMS integration", "Responsive design and animated slider", "8 premium stock photos and 5 banners", "Landing page, newsletter and social integration", "SEO setup, security plugins and deployment", "Appointment tool $199; payment integration $149"] },
    { name: "Corporate", price: "$1,599", features: ["Homepage design (5 concepts) and 15 inner pages", "Dynamic design, CMS and booking tools", "12 stock photos, 8 banners and landing page", "Custom forms, social feeds and 5 business emails", "SEO coding, analytics and webmaster tools", "60 days free maintenance and CMS training", "Explainer video $199; live chat integration $249"] },
    { name: "Enterprise", price: "$2,799", features: ["Homepage design (6 concepts) and 20 inner pages", "Custom WordPress/PHP development and CMS", "15 stock photos, 10 banners and 2 landing pages", "Payments, booking, multilingual and API integrations", "10 business emails, advanced SEO and analytics", "90 days free maintenance and expert team", "Brand identity $199; explainer video $349"] },
    { name: "Enterprise Plus", price: "$4,599", features: ["Unlimited homepage concepts and inner pages", "High-end UI/UX and custom development", "Enterprise portals, user dashboards and admin panel", "Database, API, multilingual and payment integrations", "Unlimited stock photos and banner designs", "180 days free maintenance and expert team", "Brand identity $199; copywriting up to 20 pages $1,000"] }
  ]},
  { name: "Website Maintenance", note: "Monthly maintenance packages with increasing levels of support.", plans: [
    { name: "Starter", price: "$49", cadence: "/ month", features: ["Current feature and content updates", "Website version updates and backups", "Security checkups and scans", "Bug and error fixes", "Real-time website protection", "24–48 hour quick turnaround"] },
    { name: "Advanced", price: "$69", cadence: "/ month", featured: true, features: ["Everything in Starter", "Broken-link analysis", "Speed optimization", "SEO-friendly images and alt tags", "SEO-friendly content updates", "24–48 hour quick turnaround"] },
    { name: "Premium", price: "$149", cadence: "/ month", features: ["Everything in Advanced", "Domain and hosting technical support", "Web server migrations", "Email technical support", "New pages and feature additions", "One complete theme change"] }
  ]},
  { name: "E-commerce Website", note: "Four online-store packages with increasing product and commerce capabilities.", plans: [
    { name: "Starter", price: "$599", features: ["Custom homepage and 5 inner pages", "25–100 products and up to 7 categories", "CMS, sales and inventory management", "Mini cart and payment gateway", "Product search, 5 stock photos and 2 banners", "Responsive design, sitemap and deployment", "Add-ons: brand identity $199; live chat $249"] },
    { name: "Professional", price: "$1,299", featured: true, features: ["Custom homepage (2 concepts) and 10 inner pages", "50–250 products and up to 10 categories", "Customer accounts, database and live chat option", "Shipping, dropshipping and payment integrations", "Coupons, reviews, filters and product sorting", "SEO, responsive build and complete deployment", "5 business emails and 90 days free maintenance", "Add-ons: marketplace $749; multi-currency $249"] },
    { name: "Business", price: "$2,699", features: ["Custom homepage (3 concepts) and 20 inner pages", "250–1,000 products and up to 20 categories", "Advanced order, inventory and product variation tools", "Guest checkout, shipping and multi-currency options", "Email marketing, analytics and 1 year hosting/domain", "25 stock photos, 15 banners and 2 landing pages", "180 days free maintenance and 5 business emails", "Add-ons: marketplace $749; explainer video $349"] },
    { name: "Enterprise", price: "$4,499", features: ["6 homepage concepts and unlimited inner pages", "Unlimited products, categories, photos and banners", "Custom UI/UX, coding and marketplace option", "Advanced returns, rewards, bulk upload and calculators", "Automated emails, reminders, invoicing and shipping labels", "Multi-currency, integrations and extensive admin panel", "5 years hosting/domain and 1 year free maintenance", "Unlimited business emails and expert team"] }
  ]},
  { name: "Web Applications", note: "Custom application and specialist business-system packages.", plans: [
    { name: "Basic", price: "$2,499", features: ["Custom interactive high-end design", "Custom WordPress or PHP development", "CMS, search and dynamic forms", "Optional appointment, payment and multilingual tools", "15-second 2D explainer video", "Scriptwriting, voice-over and storyboard", "Deployment, source files and ownership rights"] },
    { name: "Standard", price: "$3,499", featured: true, features: ["Custom CMS, unique pages and UI design", "Complete custom development and automation", "Newsfeed and social plugin integrations", "Up to 40 stock images and 10 banners", "LMS features: courses, video conferencing and tracking", "CRM, reporting, payments and student management", "W3C HTML and complete deployment"] },
    { name: "Enterprise", price: "$6,999", features: ["Custom CMS, UI and complete development", "Inventory, shipping and supplier modules", "Warehouse locations, stock and order management", "Automated invoices, barcode scanning and purchase orders", "Customer accounts, analytics and sales automation", "Financial reports, forecasting and team collaboration", "Advanced security and workflow features"] }
  ]},
  { name: "Web Portal", note: "Custom portals for startups, businesses and enterprise workflows.", plans: [
    { name: "Startup Website / Portal", price: "$4,000", features: ["Custom design and development", "Choose one: dating, job, professional network, social or enterprise portal", "User signup and client dashboard", "Custom CMS, coding and admin panel", "Optional appointment, payment and multilingual features", "Analytics, newsletter signup and social feeds", "Complete deployment, source files and project manager"] },
    { name: "Web Portal Plus", price: "$7,000", featured: true, features: ["Custom design and development", "Choose one: dating, job, professional, social, restaurant, medical or enterprise portal", "User signup, dashboard and custom CMS", "Database creation and automated email authentication", "Third-party APIs and module-wise architecture", "Advanced admin panel and optional commerce integrations", "Complete deployment, source files and project manager"] }
  ]},
  { name: "Video Animation", note: "All animation and motion packages listed on the reference page, grouped by package type.", plans: [
    { name: "Motion Graphics — Starter", price: "$195", features: ["15-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "4-week delivery and unlimited revisions"] },
    { name: "Motion Graphics — Classic", price: "$399", features: ["30-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "5-week delivery and unlimited revisions"] },
    { name: "Motion Graphics — Advance", price: "$599", features: ["60-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "6-week delivery and unlimited revisions"] },
    { name: "Motion Graphics — Pro Advance", price: "$799", features: ["90-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "7-week delivery and unlimited revisions"] },
    { name: "Motion Graphics — Premium", price: "$999", features: ["120-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "7-week delivery and unlimited revisions"] },
    { name: "2D Animation — Standard", price: "$149", features: ["3 custom unique designs", "2 animation styles", "Camera angles, lighting and compositing", "3 revisions, effects and dynamic colors", "Background music and MP4/MOV source formats"] },
    { name: "2D Animation — Advance", price: "$199", features: ["3 custom unique designs", "3 animation styles", "Camera angles, lighting and compositing", "Unlimited revisions and animation effects", "Dynamic colors, background music and MP4/MOV files"] },
    { name: "3D Animation — Standard", price: "$244", features: ["5 custom unique designs", "2 animation styles", "Camera angles, lighting and compositing", "3 revisions, animation and VFX", "Dynamic colors, background music and source files"] },
    { name: "3D Animation — Advance", price: "$299", features: ["5 custom unique designs", "3 animation styles", "Camera angles, lighting and compositing", "Unlimited revisions, animation and VFX", "Dynamic colors, background music and source files"] },
    { name: "Explainer Animation — Basic", price: "$195", features: ["15-second video", "Professional scriptwriting and voice-over", "Custom storyboard and animation", "4-week delivery and unlimited revisions"] },
    { name: "Explainer Animation — Standard", price: "$399", features: ["30-second video", "Professional scriptwriting and voice-over", "Custom storyboard and animation", "5-week delivery and unlimited revisions"] },
    { name: "Explainer Animation — Advance", price: "$599", features: ["60-second video", "Professional scriptwriting and voice-over", "Custom storyboard and animation", "6-week delivery and unlimited revisions"] },
    { name: "Explainer Animation — Advance Pro", price: "$799", features: ["90-second video", "Professional scriptwriting and voice-over", "Custom storyboard and animation", "7-week delivery and unlimited revisions"] },
    { name: "Explainer Animation — Premium", price: "$999", features: ["120-second video", "Professional scriptwriting and voice-over", "Custom storyboard and animation", "7-week delivery and unlimited revisions"] },
    { name: "3D Video — Basic", price: "$1,499", features: ["30-second video", "Professional script and storyboard", "3D modeling, texturing and rigging", "Camera setting, lighting, animation and VFX", "Music, Foley and voice-over artists"] },
    { name: "3D Video — Standard", price: "$2,499", features: ["60-second video", "Professional script and storyboard design", "3D modeling, texturing and rigging", "Camera setting, lighting, animation and VFX", "Music, Foley and voice-over artists"] },
    { name: "3D Video — Advance", price: "$3,999", features: ["90-second video", "Professional script and storyboard design", "3D modeling, texturing and rigging", "Camera setting, lighting, animation and VFX", "Music, Foley and voice-over artists"] },
    { name: "3D Video — Premium", price: "$4,999", features: ["120-second video", "Professional script and storyboard design", "3D modeling, texturing and rigging", "Camera setting, lighting, animation and VFX", "Music, Foley and voice-over artists"] },
    { name: "Whiteboard — Startup", price: "$195", features: ["15-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "4-week delivery and unlimited revisions"] },
    { name: "Whiteboard — Classic", price: "$399", features: ["30-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "5-week delivery and unlimited revisions"] },
    { name: "Whiteboard — Advance", price: "$599", features: ["60-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "6-week delivery and unlimited revisions"] },
    { name: "Whiteboard — Pro Advance", price: "$799", features: ["90-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "7-week delivery and unlimited revisions"] },
    { name: "Whiteboard — Premium", price: "$999", features: ["120-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "7-week delivery and unlimited revisions"] },
    { name: "Character Animation — 2D Standard", price: "$149", features: ["5–10 seconds, HD 1080", "Professional script and storyboard", "Animation and VFX", "Music, Foley and voice-over artists", "Unlimited revisions"] },
    { name: "Character Animation — 2D Advance", price: "$249", features: ["11–30 second video", "Professional script and storyboard", "Animation and VFX", "Music, Foley and voice-over artists", "Unlimited revisions"] },
    { name: "Character Animation — 3D Standard", price: "$349", features: ["5–10 second video", "Professional script and storyboard", "Animation and VFX", "Music, Foley and voice-over artists", "Unlimited revisions"] },
    { name: "Character Animation — 3D Advance", price: "$399", features: ["11–30 second video", "Professional script and storyboard", "Animation and VFX", "Music, Foley and voice-over artists", "Unlimited revisions"] },
    { name: "Typography / Short Video — Startup", price: "$145", features: ["15-second HD 1080 video", "Professional script and storyboard", "Animation and VFX", "Music, Foley and voice-over artists"] },
    { name: "Typography / Short Video — Classic", price: "$195", features: ["30-second HD 1080 video", "Professional script and storyboard", "Animation and VFX", "Music, Foley and voice-over artists", "Unlimited revisions"] },
    { name: "Typography / Short Video — Premium", price: "$245", features: ["45-second HD 1080 video", "Professional script and storyboard", "Animation and VFX", "Music, Foley and voice-over artists"] },
    { name: "Video Package — Startup", price: "$195", features: ["15-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "4-week delivery and unlimited revisions"] },
    { name: "Video Package — Classic", price: "$249", features: ["30-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "5-week delivery and unlimited revisions"] },
    { name: "Video Package — Advance", price: "$349", features: ["60-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "6-week delivery and unlimited revisions"] },
    { name: "Video Package — Premium", price: "$699", features: ["120-second video", "Professional scriptwriting, voice-over and sound effects", "Custom storyboard and animation", "7-week delivery and unlimited revisions"] },
    { name: "Video Editing — Startup", price: "$150", features: ["30-second video editing", "Script, voice-over and sound-effects editing", "Storyboard editing", "Unlimited revisions"] },
    { name: "Video Editing — Classic", price: "$300", features: ["60-second video editing", "Script, voice-over and sound-effects editing", "Storyboard editing", "Unlimited revisions"] },
    { name: "Video Editing — Advance", price: "$450", features: ["90-second video editing", "Script, voice-over and sound-effects editing", "Storyboard editing", "Unlimited revisions"] },
    { name: "Video Production — Startup", price: "$250", features: ["15-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "4-week delivery and unlimited revisions"] },
    { name: "Video Production — Classic", price: "$450", features: ["30-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "5-week delivery and unlimited revisions"] },
    { name: "Video Production — Advance", price: "$699", features: ["60-second video", "Professional script, voice-over and sound effects", "Custom storyboard and animation", "6-week delivery and unlimited revisions"] }
  ]},
  { name: "SEO", note: "Three search optimization plans with keyword targeting and reporting.", plans: [
    { name: "Startup Plan", price: "$350", features: ["Campaign setup and website audit", "10 pages optimized and 15 target keywords", "Keyword research, grouping and mapping", "On-page optimization and SEO roadmap", "Blog creation and copywriting for 3 pages", "Title, meta description and redirect optimization", "XML sitemap, robots.txt and broken-link report", "Off-page recommendations and local listings"] },
    { name: "Scaling Plan", price: "$700", featured: true, features: ["Business, consumer and competitor analysis", "35 target keywords and 15 pages", "Webpage, meta tag and image optimization", "Tracking, analytics and webmaster setup", "Call-to-action plan and sitemap creation", "Monthly reporting, recommendations and support", "Off-page optimization, link building and local listings"] },
    { name: "Venture Plan", price: "$1,200", features: ["Business, consumer and competitor analysis", "60+ target keywords and 30 pages", "Advanced webpage, metadata and image optimization", "Google Places, Analytics and Webmaster setup", "Tracking, CTA plan, sitemap and monthly reporting", "Email and phone support", "Off-page optimization and local business listings"] }
  ]},
  { name: "Video Marketing", note: "Video channel setup, campaign management and reporting.", plans: [
    { name: "Basic Video Marketing", price: "$299", features: ["1 channel setup", "Thumbnail and mobile/TV/PC banner setup", "Video uploading and title optimization", "1 video campaign setup", "Monthly reporting and broken-link report"] },
    { name: "Pro Video Marketing", price: "$499", featured: true, features: ["2 channel setup", "Thumbnail and mobile/TV/PC banner setup", "Video uploading and title optimization", "3 video campaign setups", "Monthly reporting and phone support"] },
    { name: "Elite Video Marketing", price: "$1,499", features: ["3 channel setup", "Thumbnail and mobile/TV/PC banner setup", "Video uploading and title optimization", "5 video campaign setups", "Monthly reporting"] }
  ]},
  { name: "Social Media Marketing", note: "Social media content, strategy, community and campaign packages.", plans: [
    { name: "SMM Startup", price: "$299", features: ["Facebook and Instagram platforms", "12 designed posts with copywriting", "Competitive analysis and account audit", "Content calendar", "Industry and keyword research", "Social media copywriting"] },
    { name: "SMM Pro", price: "$499", featured: true, features: ["Facebook and Instagram platforms", "15 designed posts with copywriting", "Social strategy and competitor analysis", "Brand reputation audit and monthly analytics", "1 GIF creative and content calendar", "1 ads campaign setup included"] },
    { name: "SMM Elite", price: "$1,399", features: ["Facebook, Instagram and Twitter", "18 designed posts with copywriting", "Community management and brand reputation analysis", "Monthly reporting and 3 GIF creatives", "Business Manager setup and 3 ad campaigns", "A/B testing and winning ad-set replication", "Monthly ad-spend management fee included"] }
  ]},
  { name: "PPC Advertising", note: "Paid search campaign management tiers and ad-budget coverage.", plans: [
    { name: "PPC Basic Management", price: "$299", features: ["1 ad network and up to 120 keywords", "10 ad groups and up to 3 ad copies each", "Geo targeting and conversion-code setup", "Campaign, competitor, budget and keyword management", "Bid optimization and landing-page consultation", "Analytics, traffic and conversion reports", "Ad spend range: up to $2,000/month"] },
    { name: "PPC Pro Management", price: "$839", featured: true, features: ["2 ad networks and up to 250 keywords", "20 ad groups and up to 4 ad copies each", "Geo targeting and conversion-code setup", "Campaign, competitor, ad-copy and budget management", "Bid optimization, ROI management and landing-page consultation", "Analytics, traffic and conversion reports", "Ad spend range: $2,000–$6,000/month"] },
    { name: "PPC Elite Management", price: "$1,399", features: ["All ad networks and up to 500 keywords", "50 ad groups and up to 6 ad copies each", "Geo targeting and conversion-code setup", "Campaign, competitor, budget and keyword management", "Landing-page design, CTR analysis and A/B testing", "Advanced analytics, ROI and conversion reporting", "Ad spend range: $6,500+/month"] }
  ]},
  { name: "Online Reputation Management", note: "ORM packages for brand phrase monitoring, listings and reputation support.", plans: [
    { name: "Basic ORM", price: "$999", features: ["2 brand phrases monitored and protected", "Top 10 search positions monitored", "Choose any 2 social channels", "20 social bookmarks and 2 business listings/reviews", "Company profiles, blog and article writing", "PDF/PPT creation and content submissions", "ORM activity report and low–medium DA distribution"] },
    { name: "Business ORM", price: "$1,499", featured: true, features: ["3 brand phrases monitored and protected", "Top 10 search positions monitored", "Choose any 3 social channels", "30 social bookmarks and 3 business listings/reviews", "Blogs, articles, press release and image creation", "PDF/PPT, article, press release and image submissions", "ORM activity report and medium–high DA distribution"] },
    { name: "Enterprise ORM", price: "$1,999", features: ["Reference page lists enterprise tier at $1,999", "Advanced reputation and brand visibility package", "Confirm exact deliverables with provider before purchase"] }
  ]}
];

export default function PackagesPage() {
  return <main className="pricing-page">
    <div className="announcement"><span className="status-dot" /> DIGITAL PARTNERS FOR AMBITIOUS BUSINESSES <span className="announcement-right">SERVING CLIENTS ACROSS THE UNITED STATES</span></div>
    <SiteHeader />
    <section className="pricing-hero"><div className="container">
      <div className="eyebrow"><span className="eyebrow-line" /> STRAIGHTFORWARD OPTIONS. THOUGHTFUL WORK.</div>
      <h1>Service packages<br /><span>built for your next move.</span></h1>
      <p>Explore our service packages, compare deliverables, and choose the level of support that fits your business goals.</p>
      <div className="pricing-meta"><span><b>{categories.length}</b> service categories</span><i /> <span>USD packages</span><i /> <span>Clear package details</span></div>
    </div></section>
    <section className="pricing-catalog"><div className="container">
      <div className="pricing-section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> EXPLORE ALL PACKAGES</div><h2>Find the right <span>package for you.</span></h2></div><p>All service categories and package tiers are displayed below in one page. Scroll to compare prices, features and deliverables.</p></div>
      <nav className="pricing-tabs" aria-label="Jump to package category">
        {categories.map((category, index) => <a key={category.name} className="pricing-tab" href={"#package-category-" + index}>{category.name}</a>)}
      </nav>
      {categories.map((category, index) => <section className="pricing-category-block" id={"package-category-" + index} key={category.name}>
        <div className="pricing-selected-heading"><div><span className="pricing-kicker">SERVICE CATEGORY {String(index + 1).padStart(2, "0")}</span><h3>{category.name}</h3><p>{category.note}</p></div><span className="pricing-count">{String(index + 1).padStart(2, "0")} <i>/ {categories.length}</i></span></div>
        <div className="pricing-cards">
          {category.plans.map((plan) => <article className={"pricing-card" + (plan.featured ? " pricing-featured" : "")} key={plan.name}>
            <div className="pricing-card-top"><span className="pricing-plan-name">{plan.name}</span>{plan.featured && <span className="pricing-popular">POPULAR CHOICE</span>}</div>
            <div className="pricing-price">{plan.price}<small>{plan.cadence || (plan.price === "Custom" ? "scope based" : "one-time")}</small></div>
            <div className="pricing-rule" />
            <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
            <Link className="pricing-cta" href={"/contact?service=" + encodeURIComponent(category.name + " - " + plan.name)}>Get Started <span>↗</span></Link>
          </article>)}
        </div>
      </section>)}
      <p className="pricing-footnote">All prices are shown in USD as listed by the reference provider. Confirm current pricing, scope, delivery time and third-party costs before purchase. The reference page lists Enterprise ORM with PPC details; confirm that package directly.</p>
    </div></section>
    <section className="pricing-process"><div className="container pricing-process-inner"><div><div className="eyebrow"><span className="eyebrow-line" /> HOW IT WORKS</div><h2>Clear scope.<br /><span>Confident next steps.</span></h2></div><div className="pricing-process-steps"><div><b>01</b><h3>Choose a service</h3><p>Select the category and package closest to your needs.</p></div><div><b>02</b><h3>Share your goals</h3><p>Tell us about your audience, timeline, and requirements.</p></div><div><b>03</b><h3>Confirm your scope</h3><p>We’ll confirm deliverables, timing, and the final quote before work begins.</p></div></div></div></section>
    <section className="pricing-bottom-cta"><div className="container"><div><span>HAVE A PROJECT THAT NEEDS A CUSTOM SCOPE?</span><h2>Let’s build the right plan.</h2></div><Link className="button button-blue" href="/contact">Talk to our team ↗</Link></div></section>
    <footer className="site-footer"><div className="container footer-main"><div><p className="footer-tagline">Digital solutions that move<br />your business forward.</p></div><div className="footer-links"><span>EXPLORE</span><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/packages">Packages</Link><Link href="/contact">Contact Us</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div className="footer-links"><span>OUR SERVICES</span><Link href="/services/website-development">Website development</Link><Link href="/services/shopify-development">Shopify development</Link><Link href="/services/seo">SEO & marketing</Link><Link href="/services/branding">Branding</Link></div><div className="footer-contact"><span>HAVE A PROJECT?</span><Link href="/contact">Let’s talk ↗</Link><small>Serving ambitious businesses across the United States.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><span>BUILT WITH INTENTION. <b>DX.</b></span><Link href="/privacy-policy">PRIVACY POLICY</Link><Link href="#top">BACK TO TOP ↑</Link></div></footer>
  </main>;
}
