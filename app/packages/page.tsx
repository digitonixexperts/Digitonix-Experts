"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

type Plan = { name: string; price: string; cadence?: string; featured?: boolean; features: string[] };
type Subcategory = { name: string; note: string; plans: Plan[] };
type Category = { name: string; note: string; plans: Plan[]; subcategories?: Subcategory[] };

const categories: Category[] = [
{ name:"Website Development",note:"Conversion-focused websites designed around your business goals.",plans:[
{name:"Starter",price:"$499",features:["Up to 5 custom pages","Modern responsive design","Contact form and social links","Basic on-page SEO setup","Speed and browser optimization","SSL and launch assistance","2 revision rounds","30 days post-launch support"]},
{name:"Professional",price:"$999",featured:true,features:["Up to 10 custom pages","Custom UI design and development","CMS for content updates","Blog or news section","Lead capture forms","On-page SEO and analytics setup","Speed and security checks","3 revision rounds","60 days post-launch support"]},
{name:"Premium",price:"$1,999",features:["Up to 20 custom pages","Bespoke UI/UX design","Advanced forms and integrations","CMS and dynamic content","Conversion-focused landing page","Technical SEO and analytics","Performance and security optimization","Team handover and training","90 days post-launch support"]}]},
{ name:"WordPress Development",note:"Flexible WordPress websites built to be easy to manage and grow.",plans:[
{name:"WordPress Starter",price:"$399",features:["WordPress installation and configuration","Up to 5 pages","Professional theme setup and styling","Mobile-responsive layout","Essential plugins and contact form","Basic SEO configuration","Security and backup setup","2 revision rounds"]},
{name:"WordPress Professional",price:"$899",featured:true,features:["Up to 10 custom-designed pages","Elementor or block editor setup","Custom post types where needed","Blog and lead generation forms","Essential integrations","SEO, caching and security setup","Analytics and Search Console connection","3 revision rounds","60 days support"]},
{name:"WordPress Premium",price:"$1,799",features:["Up to 20 custom pages","Advanced custom theme styling","Custom functionality and integrations","Dynamic content and reusable templates","Membership or booking features (scoped)","Advanced speed and security","SEO and analytics implementation","Admin training and documentation","90 days support"]}]},
{ name:"Shopify Development",note:"Storefronts that make product discovery and checkout simple.",plans:[
{name:"Shopify Starter",price:"$599",features:["Shopify store setup","Theme customization","Up to 10 products added","Home, About, Contact and policy pages","Payment and shipping configuration","Responsive storefront","Essential apps and navigation","Store launch checklist"]},
{name:"Shopify Professional",price:"$1,199",featured:true,features:["Custom theme styling and sections","Up to 50 products added","Collections and product filters","Payment, shipping and tax settings","Discounts and email capture","Reviews and essential app integrations","On-page SEO and analytics","Checkout and mobile QA","30 days support"]},
{name:"Shopify Premium",price:"$2,499",features:["Advanced storefront customization","Up to 150 products added","Custom sections and landing pages","Advanced collections and navigation","Bundles or subscriptions (app dependent)","Marketing and CRM integrations","Conversion and speed optimization","Analytics tracking setup","Team training and 60 days support"]}]},
{ name:"SEO",note:"Sustainable search visibility built on technical health and useful content.",plans:[
{name:"SEO Starter",price:"$299",cadence:"/ month",features:["Initial website SEO audit","Keyword research up to 10 terms","Optimization of up to 5 pages","Titles and meta descriptions","Image alt text and internal links","Search Console setup","Technical issue recommendations","Monthly progress report"]},
{name:"SEO Growth",price:"$599",cadence:"/ month",featured:true,features:["Everything in Starter","Keyword strategy up to 25 terms","Optimization of up to 10 pages","Up to 2 SEO content pieces","Technical SEO monitoring","Internal linking improvements","Local SEO guidance","Competitor visibility review","Monthly report and action plan"]},
{name:"SEO Authority",price:"$999",cadence:"/ month",features:["Everything in Growth","Keyword strategy up to 50 terms","Optimization of up to 20 pages","Up to 4 SEO content pieces","Advanced technical SEO recommendations","Content gap and competitor analysis","Local or national SEO strategy","Organic traffic insights","Monthly strategy review"]}]},
{ name:"Graphic Design",note:"A consistent visual identity for your brand, campaigns and digital channels.",plans:[
{name:"Design Essentials",price:"$199",features:["5 custom design assets","Social media post designs","Brand-aligned colors and typography","Web-ready PNG and JPG exports","2 revision rounds","Final approved files"]},
{name:"Design Professional",price:"$449",featured:true,features:["12 custom design assets","Social media and ad creatives","Marketing banners and promotional graphics","Consistent brand styling","Editable source files","3 revision rounds","Priority scheduling"]},
{name:"Design Studio",price:"$899",features:["25 custom design assets","Campaign and social creative set","Presentation or brochure design","Web and print-ready exports","Editable source files","Creative direction and consistency","3 revision rounds","Organized final asset library"]}]},
{ name:"Branding",note:"A memorable brand foundation with clear, consistent visual guidelines.",plans:[
{name:"Brand Foundation",price:"$349",features:["Primary logo concept","Color palette and typography pairing","Light and dark logo variations","Basic brand direction sheet","Social profile image","PNG, JPG and vector files","2 revision rounds"]},
{name:"Brand Identity",price:"$749",featured:true,features:["Multiple initial logo directions","Primary, secondary and icon logos","Color and typography system","Business card and letterhead","Social profile and cover assets","Brand guidelines PDF","Editable source files","3 revision rounds"]},
{name:"Complete Brand System",price:"$1,499",features:["Discovery and brand positioning","Complete logo suite and visual identity","Color, typography and graphic elements","Brand guidelines and usage rules","Business stationery suite","Social media brand kit","Pitch deck or company profile design","Editable files and handover"]}]},
{ name:"App Development",note:"Purpose-built mobile and web applications planned around real user workflows.",plans:[
{name:"App Prototype",price:"$1,999",features:["Project discovery and feature outline","User flows and wireframes","UI design up to 8 screens","Clickable prototype","Responsive design direction","Technical scope recommendation","Design file handover"]},
{name:"App Launch",price:"$4,999",featured:true,features:["Custom app UI up to 12 screens","User registration and profile flow","Backend and database foundation","Up to 3 agreed core features","Basic admin functionality","API integration where required","Testing and deployment assistance","Technical handover documentation"]},
{name:"App Scale",price:"$9,999",features:["Product discovery and architecture","Custom UI up to 25 screens","Backend, database and admin dashboard","Up to 6 agreed feature modules","Third-party API integrations","Role-based access and notifications","QA, performance and security review","Deployment support and documentation"]}]},
{ name:"Social Media Management",note:"Consistent day-to-day social presence with planned content and community care.",plans:[
{name:"Social Starter",price:"$299",cadence:"/ month",features:["Management of 1 social platform","8 monthly feed posts","Caption writing and hashtag research","Monthly content calendar","Basic scheduling and publishing","Comment and inbox monitoring (weekday)","Monthly activity summary"]},
{name:"Social Growth",price:"$599",cadence:"/ month",featured:true,features:["Management of up to 2 platforms","12 monthly posts and 4 story sets","Branded content scheduling","Captions and hashtag strategy","Community engagement (weekday)","Monthly content calendar","Profile optimization","Monthly performance report"]},
{name:"Social Pro",price:"$999",cadence:"/ month",features:["Management of up to 3 platforms","16 monthly posts and 8 story sets","Short-form video editing up to 4 clips","Content calendar and publishing","Community engagement and moderation","Monthly strategy and competitor review","Profile optimization","Performance report and planning call"]}]},
{ name:"Social Media Marketing",note:"Paid and organic social campaigns designed to reach the right audience.",plans:[
{name:"Campaign Starter",price:"$399",cadence:"/ month",features:["One social ad platform","Campaign and audience research","Campaign setup","Up to 2 ad creative concepts","Pixel or tracking guidance","Weekly optimization checks","Monthly results report","Ad spend billed separately"]},
{name:"Campaign Growth",price:"$799",cadence:"/ month",featured:true,features:["Up to 2 social ad platforms","Campaign funnel planning","Up to 4 ad creative concepts","Audience and retargeting setup","Conversion tracking guidance","Ongoing campaign optimization","A/B creative testing","Monthly performance review","Ad spend billed separately"]},
{name:"Campaign Scale",price:"$1,499",cadence:"/ month",features:["Up to 3 social ad platforms","Multi-campaign strategy and management","Up to 8 ad creative variations","Advanced audience segmentation","Retargeting and lookalike strategy","Conversion tracking review","A/B testing and budget recommendations","Weekly optimization and monthly strategy call","Ad spend billed separately"]}]},
{ name:"eBook Writing",note:"Choose the eBook service package that fits your project — from complete book creation to specialist writing, proofreading and Amazon KDP publishing support.",plans:[
{name:"eBook Essentials",price:"$249",features:["Up to 3,000 words","Topic and outline development","Original writing and editing","Basic formatting for digital reading","One title and subtitle suggestion","2 revision rounds","Final editable document"]},
{name:"eBook Professional",price:"$599",featured:true,features:["Up to 7,500 words","Research and detailed outline","Original chapter-by-chapter writing","Proofreading and editing","Clickable contents page","Basic eBook formatting","Cover concept direction","3 revision rounds"]},
{name:"eBook Complete",price:"$1,099",features:["Up to 15,000 words","Topic research and content strategy","Original writing and structural editing","Proofreading and fact-check pass","Professional eBook layout","Cover design","EPUB and PDF-ready files","3 revision rounds"]},
{name:"Ghostwriting Package",price:"$499",features:["Up to 3,000 words written in your voice","Discovery questionnaire and content direction","Chapter outline before drafting","Original manuscript writing","One revision round","Editable Word or Google Docs file"]},
{name:"Proofreading Package",price:"$149",features:["Proofreading up to 7,500 words","Spelling, grammar and punctuation checks","Consistency of headings and terminology","Typographical and formatting checks","Tracked corrections and editorial notes","One revision pass"]},
{name:"Amazon KDP Publishing Package",price:"$349",features:["One Kindle eBook title setup","Manuscript and cover file readiness check","Book title, subtitle and metadata setup","Book description formatting","Keyword and category guidance","KDP upload assistance and preview check","Client retains account ownership and approves final publication"]}]},
{ name:"Grant Writing",note:"Clear, persuasive grant documents aligned with funder requirements.",plans:[
{name:"Grant Review",price:"$299",features:["Review of one grant opportunity","Eligibility and requirement checklist","Review of existing proposal materials","Gap and improvement recommendations","One consultation session","Written review summary"]},
{name:"Grant Proposal",price:"$899",featured:true,features:["One grant application narrative","Funder and guideline review","Project description and needs statement","Goals, outcomes and impact narrative","Editing for clarity and alignment","One revision round","Submission-readiness checklist"]},
{name:"Grant Partnership",price:"$1,799",features:["One comprehensive grant proposal","Funder research for agreed opportunity","Needs statement and project narrative","Goals, outcomes and evaluation plan","Organization capacity narrative","Budget narrative support (client figures supplied)","Supporting document checklist","Up to 2 revision rounds"]}]},
{ name:"Content Writing",note:"Useful, audience-focused writing for websites, blogs and marketing.",plans:[
{name:"Content Starter",price:"$199",features:["Up to 3 short-form content pieces","Up to 500 words per piece","Topic and keyword alignment","Original writing and proofreading","One tone-of-voice direction","2 revision rounds"]},
{name:"Content Growth",price:"$449",featured:true,features:["Up to 5 content pieces","Up to 1,000 words per piece","Topic research and outlines","SEO-informed headings and structure","Original writing and editing","Meta title and description for web articles","3 revision rounds"]},
{name:"Content Authority",price:"$899",features:["Up to 10 content pieces","Up to 1,200 words per piece","Content calendar and topic planning","Audience and competitor research","SEO-informed writing and internal link suggestions","Editing and proofreading","Meta titles and descriptions","Monthly content performance recommendations"]}]}
];

export default function PackagesPage() {
  const [active, setActive] = useState(0);
  const [activeSub, setActiveSub] = useState(0);
  const category = categories[active];
  const selectedSubcategory = category.subcategories?.[activeSub] ?? category.subcategories?.[0];
  const displayedPlans = selectedSubcategory ? selectedSubcategory.plans : category.plans;
  const displayedName = selectedSubcategory ? selectedSubcategory.name : category.name;
  const displayedNote = selectedSubcategory ? selectedSubcategory.note : category.note;
  return <main className="pricing-page">
    <div className="announcement"><span className="status-dot" /> DIGITAL PARTNERS FOR AMBITIOUS BUSINESSES <span className="announcement-right">SERVING CLIENTS ACROSS THE UNITED STATES</span></div>
    <SiteHeader />
    <section className="pricing-hero"><div className="container">
      <div className="eyebrow"><span className="eyebrow-line" /> STRAIGHTFORWARD OPTIONS. THOUGHTFUL WORK.</div>
      <h1>Service packages<br /><span>built for your next move.</span></h1>
      <p>Straightforward packages from Digitonix Experts, with clear deliverables and room to scale as your business grows.</p>
      <div className="pricing-meta"><span><b>{categories.length}</b> service categories</span><i /> <span>USD packages</span><i /> <span>Clear package details</span></div>
    </div></section>
    <section className="pricing-catalog"><div className="container">
      <div className="pricing-section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> EXPLORE ALL PACKAGES</div><h2>Find the right <span>package for you.</span></h2></div><p>Choose a service to compare three carefully scoped options. Select the package that best matches your goals and we’ll confirm the project details with you.</p></div>
      <nav className="pricing-tabs" aria-label="Package categories">
        {categories.map((item, index) => <button type="button" key={item.name} className={"pricing-tab" + (active === index ? " active" : "")} onClick={() => { setActive(index); setActiveSub(0); }}>{item.name}</button>)}
      </nav>
      <section className="pricing-category-block" key={category.name}>
        <div className="pricing-selected-heading"><div><span className="pricing-kicker">SERVICE CATEGORY {String(active + 1).padStart(2, "0")}</span><h3>{category.name}</h3><p>{category.note}</p></div><span className="pricing-count">{String(active + 1).padStart(2, "0")} <i>/ {categories.length}</i></span></div>
        {category.subcategories && <nav className="pricing-tabs ebook-subtabs" aria-label="eBook service categories">
          {category.subcategories.map((sub, index) => <button type="button" key={sub.name} className={"pricing-tab" + (activeSub === index ? " active" : "")} onClick={() => setActiveSub(index)}>{sub.name}</button>)}
        </nav>}
        {selectedSubcategory && <div className="pricing-selected-heading ebook-subheading"><div><span className="pricing-kicker">EBOOK SPECIALIST SERVICE</span><h3>{displayedName}</h3><p>{displayedNote}</p></div></div>}
        <div className="pricing-cards">
          {displayedPlans.map((plan, planIndex) => <article className={"pricing-card" + (plan.featured ? " pricing-featured" : "")} key={plan.name}>
            <div className="pricing-card-top"><span className="pricing-plan-name">{plan.name}</span>{plan.featured && <span className="pricing-popular">POPULAR CHOICE</span>}</div>
            <div className="pricing-price">{plan.price}<small>{plan.cadence || (plan.price === "Custom" ? "scope based" : "one-time")}</small></div>
            <div className="pricing-rule" />
            <div className="pricing-card-scroll">
              <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>

            </div>
            <Link className="pricing-cta" href={"/contact?service=" + encodeURIComponent(category.name + " - " + displayedName + " - " + plan.name)}>Get Started <span>→</span></Link>
          </article>)}
        </div>
      </section>
      <p className="pricing-footnote">Prices are starting estimates in USD. Final scope, timelines, platform fees, subscriptions and any advertising spend are confirmed in a written proposal before work begins.</p>
    </div></section>
    <section className="pricing-process"><div className="container pricing-process-inner"><div><div className="eyebrow"><span className="eyebrow-line" /> HOW IT WORKS</div><h2>Clear scope.<br /><span>Confident next steps.</span></h2></div><div className="pricing-process-steps"><div><b>01</b><h3>Choose a service</h3><p>Select the category and package closest to your needs.</p></div><div><b>02</b><h3>Share your goals</h3><p>Tell us about your audience, timeline, and requirements.</p></div><div><b>03</b><h3>Confirm your scope</h3><p>We’ll confirm deliverables, timing, and the final quote before work begins.</p></div></div></div></section>
    <section className="pricing-bottom-cta"><div className="container"><div><span>HAVE A PROJECT THAT NEEDS A CUSTOM SCOPE?</span><h2>Let’s build the right plan.</h2></div><Link className="button button-blue" href="/contact">Talk to our team ↗</Link></div></section>
    <footer className="site-footer"><div className="container footer-main"><div><p className="footer-tagline">Digital solutions that move<br />your business forward.</p></div><div className="footer-links"><span>EXPLORE</span><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/packages">Packages</Link><Link href="/contact">Contact Us</Link><Link href="/privacy-policy">Privacy Policy</Link></div><div className="footer-links"><span>OUR SERVICES</span><Link href="/services/website-development">Website development</Link><Link href="/services/shopify-development">Shopify development</Link><Link href="/services/seo">SEO & marketing</Link><Link href="/services/branding">Branding</Link></div><div className="footer-contact"><span>HAVE A PROJECT?</span><Link href="/contact">Let’s talk ↗</Link><small>Serving ambitious businesses across the United States.</small></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</span><span>BUILT WITH INTENTION. <b>DX.</b></span><Link href="/privacy-policy">PRIVACY POLICY</Link><Link href="#top">BACK TO TOP ↑</Link></div></footer>
  </main>;
}
