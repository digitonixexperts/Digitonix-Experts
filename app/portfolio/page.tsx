"use client";

import SiteHeader from "../components/SiteHeader";

const websiteWork = [
  { name: "Fitness & Wellness", type: "WEBSITE DESIGN", image: "/portfolio/fitness-website.svg", description: "Clean, conversion-focused layouts for fitness brands and membership experiences." },
  { name: "E-commerce Experiences", type: "ONLINE STORES", image: "/portfolio/showcase-ecommerce.svg", description: "Product-led storefronts designed to make browsing simple and shopping seamless." },
  { name: "Jewellery & Lifestyle", type: "BRAND WEBSITES", image: "/portfolio/showcase-jewellery.svg", description: "Elegant digital storefront concepts with thoughtful visual storytelling." }
];

const logoWork = [
  { name: "Brand identity systems", note: "Distinctive marks, color palettes and typography", image: "/portfolio/showcase-logos.svg" },
  { name: "Logo refresh concepts", note: "Modern directions built around brand personality", image: "/portfolio/branding-before-after.svg" }
];

const marketingWork = [
  { name: "Digital growth campaigns", note: "Campaign planning, audience targeting and creative direction", image: "/portfolio/showcase-marketing.svg" },
  { name: "SEO & content visibility", note: "Search-focused content and stronger online discoverability", image: "/portfolio/seo-before-after.svg" },
  { name: "Social media creative", note: "Consistent content systems for stronger brand presence", image: "/portfolio/social-before-after.svg" }
];

function SectionHeading({ number, eyebrow, title, accent, text }: { number: string; eyebrow: string; title: string; accent: string; text: string }) {
  return (
    <div className="pf-heading">
      <div className="pf-heading-left">
        <span className="pf-number">{number}</span>
        <div><div className="pf-eyebrow">{eyebrow}</div><h2>{title} <span>{accent}</span></h2></div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="pf-page">
      <SiteHeader />
      <section className="pf-hero">
        <div className="pf-hero-glow" />
        <div className="pf-wrap pf-hero-inner">
          <div className="pf-kicker"><i /> THE DIGITONIX EXPERTS PORTFOLIO</div>
          <h1>Ideas into impact.<br /><span>Work that moves brands.</span></h1>
          <p>A look at the creative thinking, digital experiences and growth-focused work we bring together for ambitious businesses.</p>
          <div className="pf-hero-links"><a href="#websites">Explore our work <b>↓</b></a><span>DESIGN · DEVELOPMENT · DIGITAL GROWTH</span></div>
          <div className="pf-hero-stamp"><img src="/digitonix-logo.svg" alt="Digitonix Experts" /></div>
        </div>
      </section>

      <nav className="pf-jump"><div className="pf-wrap"><a href="#websites"><b>01</b> Websites <span>↘</span></a><a href="#logos"><b>02</b> Logo Design <span>↘</span></a><a href="#marketing"><b>03</b> Digital Marketing <span>↘</span></a></div></nav>

      <section className="pf-section" id="websites">
        <div className="pf-wrap">
          <SectionHeading number="01" eyebrow="DIGITAL EXPERIENCES" title="Website" accent="Design & Development" text="Responsive, user-friendly websites that bring a brand's story to life and make every visit feel effortless." />
          <div className="pf-web-grid">
            {websiteWork.map((item, index) => <article className="pf-work-card pf-web-card" key={item.name}>
              <div className="pf-card-meta"><span>{item.type}</span><b>0{index + 1}</b></div>
              <div className="pf-art"><img src={item.image} alt={item.name + " portfolio visual"} loading="lazy" /></div>
              <div className="pf-card-copy"><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="pf-arrow">↗</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="pf-section pf-section-tint" id="logos">
        <div className="pf-wrap">
          <SectionHeading number="02" eyebrow="MAKE IT RECOGNIZABLE" title="Logo Design &" accent="Brand Identity" text="Memorable visual identities built with purpose—from the first logo concept to a consistent look across every touchpoint." />
          <div className="pf-logo-grid">
            {logoWork.map((item, index) => <article className="pf-work-card pf-logo-card" key={item.name}>
              <div className="pf-card-meta"><span>LOGO & BRANDING</span><b>0{index + 1}</b></div>
              <div className="pf-art pf-logo-art"><img src={item.image} alt={item.name + " portfolio visual"} loading="lazy" /></div>
              <div className="pf-card-copy"><div><h3>{item.name}</h3><p>{item.note}</p></div><span className="pf-arrow">↗</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="pf-section" id="marketing">
        <div className="pf-wrap">
          <SectionHeading number="03" eyebrow="REACH THE RIGHT PEOPLE" title="Digital" accent="Marketing" text="Connected marketing creative and strategy to help businesses build visibility, connect with the right audience and keep growing." />
          <div className="pf-marketing-grid">
            {marketingWork.map((item, index) => <article className="pf-work-card pf-marketing-card" key={item.name}>
              <div className="pf-card-meta"><span>MARKETING & GROWTH</span><b>0{index + 1}</b></div>
              <div className="pf-art"><img src={item.image} alt={item.name + " portfolio visual"} loading="lazy" /></div>
              <div className="pf-card-copy"><div><h3>{item.name}</h3><p>{item.note}</p></div><span className="pf-arrow">↗</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="pf-cta"><div className="pf-wrap pf-cta-inner"><div><div className="pf-eyebrow">HAVE A PROJECT IN MIND?</div><h2>Let's make something<br /><span>worth remembering.</span></h2></div><a href="/#contact">Start a conversation <b>↗</b></a></div></section>
      <style jsx>{`
        .pf-page{--navy:#102b50;--blue:#087fe0;--pale:#f2f7fc;--ink:#172b43;color:var(--ink);background:#fff}
        .pf-wrap{width:min(1160px,calc(100% - 48px));margin:0 auto}
        .pf-hero{position:relative;overflow:hidden;background:linear-gradient(118deg,#071d38 0%,#0b315c 58%,#0c4b82 100%);color:#fff;padding:92px 0 76px}
        .pf-hero:after{content:"";position:absolute;width:560px;height:560px;border:1px solid #ffffff18;border-radius:50%;right:-110px;top:-190px;box-shadow:0 0 0 45px #ffffff08,0 0 0 95px #ffffff06}
        .pf-hero-glow{position:absolute;width:340px;height:340px;background:#087fe0;filter:blur(140px);opacity:.35;right:20%;bottom:-220px}
        .pf-hero-inner{position:relative;z-index:1}
        .pf-kicker,.pf-eyebrow{font-size:10px;letter-spacing:2px;font-weight:800}
        .pf-kicker{color:#b9dcff;display:flex;align-items:center;gap:10px}
        .pf-kicker i{width:7px;height:7px;border-radius:50%;background:#49b3ff;box-shadow:0 0 0 5px #49b3ff20}
        .pf-hero h1{font-size:clamp(43px,6.5vw,76px);line-height:1.02;letter-spacing:-3.5px;margin:25px 0 18px;font-weight:850}
        .pf-hero h1 span{color:#73bdff}
        .pf-hero-inner>p{max-width:610px;color:#d0dfef;font-size:15px;line-height:1.9;margin:0}
        .pf-hero-links{display:flex;align-items:center;gap:28px;margin-top:34px;flex-wrap:wrap}
        .pf-hero-links a{background:#087fe0;color:#fff;text-decoration:none;padding:13px 19px;border-radius:4px;font-size:12px;font-weight:750}
        .pf-hero-links a b{margin-left:18px}
        .pf-hero-links>span{font-size:9px;letter-spacing:1.5px;color:#b7cce1}
        .pf-hero-stamp{position:absolute;right:0;bottom:0;width:150px;height:75px;background:#fff;border-radius:7px 7px 0 0;display:grid;place-items:center;padding:12px}
        .pf-hero-stamp img{width:100%;max-height:52px;object-fit:contain}
        .pf-jump{background:#fff;border-bottom:1px solid #e4ebf3;position:relative}
        .pf-jump .pf-wrap{display:grid;grid-template-columns:repeat(3,1fr)}
        .pf-jump a{display:flex;align-items:center;gap:12px;padding:22px 18px;color:#233b57;text-decoration:none;border-right:1px solid #e4ebf3;font-size:13px;font-weight:750}
        .pf-jump a:first-child{border-left:1px solid #e4ebf3}
        .pf-jump a b{font-size:10px;color:var(--blue)}
        .pf-jump a span{margin-left:auto;color:var(--blue);font-size:17px}
        .pf-section{padding:88px 0;scroll-margin-top:85px}
        .pf-section-tint{background:#f4f8fd}
        .pf-heading{display:flex;justify-content:space-between;align-items:end;gap:45px;margin-bottom:34px}
        .pf-heading-left{display:flex;gap:17px;align-items:flex-start}
        .pf-number{font-size:12px;font-weight:800;color:var(--blue);border:1px solid #c7def2;padding:8px 9px;margin-top:3px}
        .pf-eyebrow{color:var(--blue);margin-bottom:12px}
        .pf-heading h2{font-size:clamp(29px,4vw,43px);line-height:1.1;letter-spacing:-1.7px;color:var(--navy);margin:0;font-weight:850}
        .pf-heading h2 span{color:var(--blue)}
        .pf-heading>p{max-width:390px;color:#718198;font-size:13px;line-height:1.9;margin:0 0 3px}
        .pf-web-grid,.pf-marketing-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
        .pf-logo-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
        .pf-work-card{background:#fff;border:1px solid #e1eaf3;min-width:0;box-shadow:0 10px 28px #102b5008;transition:transform .25s ease,box-shadow .25s ease}
        .pf-work-card:hover{transform:translateY(-4px);box-shadow:0 18px 36px #102b5014}
        .pf-card-meta{height:42px;padding:0 15px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e8eef5;color:#7b8da3;font-size:8px;font-weight:800;letter-spacing:1.3px}
        .pf-card-meta b{color:var(--blue);font-size:10px}
        .pf-art{height:220px;background:#eaf3fc;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:10px}
        .pf-art img{width:100%;height:100%;object-fit:contain;display:block}
        .pf-logo-art{height:260px;background:#eaf3fc}
        .pf-card-copy{padding:19px 18px 20px;display:flex;justify-content:space-between;align-items:flex-start;gap:10px}
        .pf-card-copy h3{font-size:16px;color:var(--navy);margin:0 0 7px;font-weight:800}
        .pf-card-copy p{font-size:11px;line-height:1.75;color:#718198;margin:0}
        .pf-arrow{flex:0 0 29px;height:29px;border:1px solid #d6e6f5;color:var(--blue);display:grid;place-items:center;border-radius:50%;font-size:14px}
        .pf-cta{background:#071d38;color:#fff;padding:65px 0}
        .pf-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:30px}
        .pf-cta .pf-eyebrow{color:#82c4ff}
        .pf-cta h2{font-size:clamp(31px,4.5vw,48px);line-height:1.08;letter-spacing:-1.7px;margin:12px 0 0}
        .pf-cta h2 span{color:#73bdff}
        .pf-cta a{background:#087fe0;color:#fff;text-decoration:none;padding:16px 20px;border-radius:4px;font-size:12px;font-weight:750;white-space:nowrap}
        .pf-cta a b{margin-left:20px}
        @media(max-width:850px){.pf-heading{display:block}.pf-heading>p{margin:18px 0 0 45px;max-width:600px}.pf-web-grid,.pf-marketing-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.pf-web-card:last-child,.pf-marketing-card:last-child{grid-column:span 2}.pf-art{height:210px}}
        @media(max-width:600px){.pf-wrap{width:min(100% - 32px,500px)}.pf-hero{padding:67px 0 62px}.pf-hero h1{font-size:43px;letter-spacing:-2px}.pf-hero-inner>p{font-size:13px}.pf-hero-stamp{position:relative;right:auto;bottom:auto;margin-top:30px;width:135px;height:65px}.pf-hero-links{gap:15px}.pf-hero-links>span{font-size:8px}.pf-jump .pf-wrap{grid-template-columns:1fr}.pf-jump a,.pf-jump a:first-child{border-left:0;border-right:0;border-bottom:1px solid #e4ebf3;padding:16px 5px}.pf-section{padding:62px 0}.pf-heading-left{gap:11px}.pf-heading h2{font-size:31px;letter-spacing:-1.1px}.pf-heading>p{margin-left:39px;font-size:12px}.pf-web-grid,.pf-marketing-grid,.pf-logo-grid{grid-template-columns:1fr;gap:14px}.pf-web-card:last-child,.pf-marketing-card:last-child{grid-column:auto}.pf-art{height:220px}.pf-logo-art{height:220px}.pf-cta{padding:52px 0}.pf-cta-inner{display:block}.pf-cta a{display:inline-block;margin-top:24px}}
      `}</style>
    </main>
  );
}
