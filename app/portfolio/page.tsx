"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  tone: string;
  description: string;
};

const projects: Project[] = [
  { id: "web-01", title: "Jewellery & Lifestyle Website", category: "Websites", image: "/portfolio/website-before-after.svg", tone: "peach", description: "Editorial-style website presentation with a premium product focus." },
  { id: "web-02", title: "Business Website Experience", category: "Websites", image: "/portfolio/grant-content-before-after.svg", tone: "blue", description: "A clean, responsive website concept for a service-led business." },
  { id: "shop-01", title: "E-commerce Storefront", category: "E-Commerce", image: "/portfolio/ecommerce-before-after.svg", tone: "gold", description: "Product discovery and shopping experience concept." },
  { id: "brand-01", title: "Logo & Brand Identity", category: "Logo", image: "/portfolio/branding-before-after.svg", tone: "lavender", description: "A visual identity direction with a memorable logo presentation." },
  { id: "marketing-01", title: "SEO & Search Visibility", category: "Digital Marketing", image: "/portfolio/seo-before-after.svg", tone: "mint", description: "Search-focused content and on-page optimization concept." },
  { id: "marketing-02", title: "Social Media Campaign", category: "Digital Marketing", image: "/portfolio/social-before-after.svg", tone: "pink", description: "A coordinated social content and campaign creative direction." },
  { id: "app-01", title: "Mobile App UI Concept", category: "Mobile Apps", image: "/portfolio/app-before-after.svg", tone: "sky", description: "Mobile-first screens and product interface exploration." },
  { id: "motion-01", title: "Motion & Video Creative", category: "Video Animation", image: "/portfolio/ebook-before-after.svg", tone: "coral", description: "A sample visual direction for animated promotional content." },
];

const filters = ["All", "Websites", "E-Commerce", "Logo", "Digital Marketing", "Mobile Apps", "Video Animation"];

export default function Page() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.category === filter), [filter]);
  const columns = useMemo(() => Array.from({ length: 4 }, (_, i) => filtered.filter((_, index) => index % 4 === i)), [filtered]);

  return (
    <main className="portfolio-page">
      <div className="portfolio-topline"><span className="topline-dot" /> DIGITONIX EXPERTS <span>CREATIVE WORK · 2026</span></div>
      <SiteHeader />
      <section className="portfolio-heading">
        <div className="heading-orb orb-one" /><div className="heading-orb orb-two" />
        <div className="portfolio-kicker">A LITTLE LOOK AT WHAT WE CREATE</div>
        <h1>Ideas made <span>visible.</span><br />Work made to <span>move.</span></h1>
        <p>Explore a colorful mix of websites, stores, brand identities, marketing, apps and creative content.</p>
      </section>

      <section className="portfolio-work">
        <div className="filter-wrap" aria-label="Portfolio categories">
          {filters.map((item) => (
            <button key={item} type="button" className={filter === item ? "filter-pill active" : "filter-pill"} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="gallery-caption"><span>{filter === "All" ? "SELECTED PROJECTS" : filter.toUpperCase()}</span><span>MOVE YOUR CURSOR OVER THE GALLERY TO EXPLORE ↓</span></div>
        <div className={filter === "All" ? "portfolio-gallery" : "portfolio-gallery filtered-gallery"}>
          {columns.map((column, index) => (
            <div className={`gallery-column column-${index + 1}`} key={`column-${index}`}>
              <div className="gallery-track">
                {[...column, ...column, ...column].map((project, itemIndex) => (
                  <article className={`gallery-card tone-${project.tone}`} key={`${project.id}-${itemIndex}`}>
                    <div className="gallery-image-wrap">
                      <img src={project.image} alt={project.title} loading={itemIndex > 3 ? "lazy" : "eager"} />
                      <span className="image-index">{String((itemIndex % Math.max(column.length, 1)) + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="gallery-card-info">
                      <span>{project.category}</span>
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="gallery-hint">Hover to gently auto-scroll · Move away to pause · On mobile, swipe to browse</p>
        <p className="portfolio-note">Portfolio visuals are selected showcase concepts and sample creative work. Project examples are presented for design demonstration.</p>
      </section>

      <section className="portfolio-cta">
        <div><span>HAVE SOMETHING IN MIND?</span><h2>Let’s make your next<br /><em>big idea happen.</em></h2></div>
        <Link href="/contact" className="portfolio-cta-link">Start a project <b>↗</b></Link>
      </section>
      <footer className="portfolio-footer">
        <div><strong>DIGITONIX <i>EXPERTS.</i></strong><span>Creative digital solutions for growing businesses.</span></div>
        <nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/packages">Packages</Link><Link href="/contact">Contact</Link></nav>
        <small>© {new Date().getFullYear()} Digitonix Experts. All rights reserved.</small>
      </footer>

      <style jsx>{`
        .portfolio-page{background:#f7f7f5;color:#151515;min-height:100vh;overflow:hidden}
        .portfolio-topline{height:34px;padding:0 5.2%;display:flex;align-items:center;gap:10px;background:#171717;color:#fff;font-size:10px;font-weight:800;letter-spacing:1.8px}
        .portfolio-topline span:last-child{margin-left:auto;color:#bdbdbd;font-weight:600}
        .topline-dot{width:7px;height:7px;border-radius:50%;background:#ff9d00;box-shadow:0 0 12px #ff9d00}
        .portfolio-heading{position:relative;text-align:center;padding:78px 20px 48px;isolation:isolate}
        .portfolio-kicker{font-size:11px;letter-spacing:2.5px;font-weight:800;color:#777;margin-bottom:20px}
        .portfolio-heading h1{font-size:clamp(42px,6.5vw,82px);line-height:.99;letter-spacing:-4px;margin:0;font-weight:900}
        .portfolio-heading h1 span{color:#f59b08}
        .portfolio-heading p{font-size:16px;line-height:1.7;color:#646464;max-width:620px;margin:22px auto 0}
        .heading-orb{position:absolute;border-radius:50%;z-index:-1;filter:blur(1px);opacity:.55}
        .orb-one{width:170px;height:170px;background:radial-gradient(circle at 35% 35%,#ffdc91,#ff9f00 70%);left:8%;top:38px}
        .orb-two{width:115px;height:115px;background:radial-gradient(circle at 35% 35%,#b7e8dc,#55bca8 70%);right:11%;bottom:0}
        .portfolio-work{max-width:1440px;margin:0 auto;padding:0 4.5% 78px}
        .filter-wrap{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;padding:14px 0 25px}
        .filter-pill{border:0;border-radius:999px;padding:12px 22px;background:#ffa30a;color:#161616;font-size:14px;font-weight:650;cursor:pointer;transition:transform .2s,background .2s,color .2s;white-space:nowrap}
        .filter-pill:hover{transform:translateY(-3px);background:#171717;color:#fff}
        .filter-pill.active{background:#171717;color:#fff}
        .gallery-caption{display:flex;justify-content:space-between;align-items:center;margin:4px 0 13px;font-size:10px;font-weight:800;letter-spacing:1.7px;color:#777}
        .gallery-caption span:last-child{color:#a0a0a0}
        .portfolio-gallery{height:760px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;overflow:hidden;position:relative;mask-image:linear-gradient(to bottom,transparent 0,#000 4%,#000 96%,transparent 100%)}
        .gallery-column{height:100%;overflow:hidden;position:relative}
        .gallery-track{display:flex;flex-direction:column;gap:16px;transform:translateY(0);will-change:transform}
        .portfolio-gallery:hover .gallery-track{animation-play-state:running}
        .gallery-column .gallery-track{animation-play-state:paused}
        .column-1 .gallery-track{animation:galleryUp 34s linear infinite}
        .column-2 .gallery-track{animation:galleryDown 39s linear infinite}
        .column-3 .gallery-track{animation:galleryUp 43s linear infinite}
        .column-4 .gallery-track{animation:galleryDown 36s linear infinite}
        .filtered-gallery{height:auto;min-height:280px;grid-template-columns:repeat(4,minmax(0,1fr));align-items:start}
        .filtered-gallery .gallery-column{height:100%}
        .filtered-gallery .gallery-track{animation-play-state:paused}
        .gallery-card{background:#fff;border-radius:4px;overflow:hidden;box-shadow:0 8px 24px rgba(20,20,20,.055);border:1px solid rgba(0,0,0,.035);transition:transform .35s,box-shadow .35s;flex:0 0 auto}
        .gallery-card:hover{transform:translateY(-5px);box-shadow:0 18px 34px rgba(20,20,20,.13)}
        .gallery-image-wrap{height:270px;position:relative;overflow:hidden;background:#ececec}
        .gallery-image-wrap img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .65s cubic-bezier(.2,.7,.2,1)}
        .gallery-card:hover img{transform:scale(1.055)}
        .image-index{position:absolute;right:12px;top:12px;background:#171717;color:#fff;border-radius:30px;padding:5px 9px;font-size:10px;font-weight:800}
        .gallery-card-info{padding:16px 17px 18px;border-top:4px solid #ffa30a}
        .tone-peach .gallery-card-info{border-color:#ff9f87}.tone-blue .gallery-card-info{border-color:#517be9}.tone-gold .gallery-card-info{border-color:#f5a000}.tone-lavender .gallery-card-info{border-color:#9c80e8}.tone-mint .gallery-card-info{border-color:#4eb69d}.tone-pink .gallery-card-info{border-color:#ed83b4}.tone-sky .gallery-card-info{border-color:#59b8e8}.tone-coral .gallery-card-info{border-color:#f0785f}
        .gallery-card-info>span{font-size:9px;letter-spacing:1.4px;font-weight:850;color:#888;text-transform:uppercase}
        .gallery-card-info h2{font-size:17px;line-height:1.25;margin:7px 0 5px;font-weight:850}
        .gallery-card-info p{font-size:12px;line-height:1.5;color:#777;margin:0}
        .portfolio-gallery:focus-within .gallery-track{animation-play-state:running}\n        .gallery-hint{text-align:center;color:#888;font-size:12px;margin:18px 0 8px}
        .portfolio-note{text-align:center;color:#aaa;font-size:10px;line-height:1.5;margin:0 auto;max-width:700px}
        .portfolio-cta{background:#171717;color:#fff;padding:58px 8%;display:flex;justify-content:space-between;align-items:center;gap:24px}
        .portfolio-cta>div>span{font-size:10px;letter-spacing:2px;color:#ffa30a;font-weight:800}
        .portfolio-cta h2{font-size:clamp(30px,4vw,52px);line-height:1.06;letter-spacing:-1.5px;margin:13px 0 0}
        .portfolio-cta h2 em{font-style:normal;color:#ffa30a}
        .portfolio-cta-link{background:#ffa30a;color:#171717;text-decoration:none;padding:15px 21px;border-radius:50px;font-weight:800;white-space:nowrap}
        .portfolio-cta-link b{margin-left:15px}
        .portfolio-footer{background:#101010;color:#fff;padding:34px 8% 20px;display:grid;grid-template-columns:1.4fr 1fr;gap:26px}
        .portfolio-footer>div{display:flex;flex-direction:column;gap:8px}
        .portfolio-footer strong{font-size:20px;letter-spacing:-.5px}.portfolio-footer strong i{color:#ffa30a;font-style:normal}
        .portfolio-footer>div span,.portfolio-footer small{font-size:11px;color:#999}
        .portfolio-footer nav{display:flex;justify-content:flex-end;gap:20px;flex-wrap:wrap}
        .portfolio-footer nav a{font-size:12px;color:#ddd;text-decoration:none}
        .portfolio-footer nav a:hover{color:#ffa30a}
        .portfolio-footer small{grid-column:1/-1;border-top:1px solid #303030;padding-top:16px}
        @keyframes galleryUp{from{transform:translateY(0)}to{transform:translateY(-66.666%)}}
        @keyframes galleryDown{from{transform:translateY(-66.666%)}to{transform:translateY(0)}}
        @media(prefers-reduced-motion:reduce){.gallery-track{animation:none!important}.gallery-card,.gallery-image-wrap img,.filter-pill{transition:none}}
        @media(max-width:900px){.portfolio-heading{padding-top:58px}.portfolio-heading h1{letter-spacing:-2.5px}.portfolio-work{padding-left:3%;padding-right:3%}.portfolio-gallery{height:650px;gap:11px}.gallery-image-wrap{height:220px}.gallery-card-info{padding:13px}.gallery-card-info h2{font-size:15px}.gallery-card-info p{font-size:11px}.filter-wrap{justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;padding:12px 2px 20px;scrollbar-width:none}.filter-wrap::-webkit-scrollbar{display:none}.filter-pill{font-size:12px;padding:11px 17px}.filtered-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:600px){.portfolio-gallery .gallery-track{animation-play-state:running!important;animation-duration:70s!important}.portfolio-topline{padding:0 4%;font-size:8px;letter-spacing:1px}.portfolio-heading{padding:54px 18px 34px}.portfolio-heading h1{font-size:45px;letter-spacing:-2.4px}.portfolio-heading p{font-size:13px}.orb-one{width:90px;height:90px;left:-18px;top:30px}.orb-two{width:75px;height:75px;right:-12px}.portfolio-work{padding:0 14px 52px}.gallery-caption{font-size:8px;letter-spacing:1px}.gallery-caption span:last-child{max-width:48%;text-align:right;line-height:1.4}.portfolio-gallery{height:570px;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.gallery-column:nth-child(n+3){display:none}.gallery-image-wrap{height:190px}.gallery-track{gap:10px}.gallery-card-info{padding:11px}.gallery-card-info h2{font-size:13px}.gallery-card-info p{font-size:10px}.gallery-card-info>span{font-size:8px}.filtered-gallery{height:570px;min-height:200px;grid-template-columns:repeat(2,minmax(0,1fr))}.filtered-gallery .gallery-column:nth-child(n+3){display:none}.gallery-hint{font-size:10px}.portfolio-cta{padding:40px 22px;display:block}.portfolio-cta h2{font-size:36px}.portfolio-cta-link{display:inline-block;margin-top:22px}.portfolio-footer{padding:28px 22px 18px;grid-template-columns:1fr}.portfolio-footer nav{justify-content:flex-start;gap:14px}.portfolio-footer small{grid-column:auto}}
      `}</style>
    </main>
  );
}
