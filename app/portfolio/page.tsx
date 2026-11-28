"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const projects = [
  { title: "Jewellery Limited", type: "E-Commerce · Jewellery", image: "/portfolio/jewellery-store.svg", number: "01", tone: "lavender" },
  { title: "Borcelle Frappe", type: "E-Commerce · Food & Beverage", image: "/portfolio/frappe-ecommerce.svg", number: "02", tone: "green" },
  { title: "Studio Shodwe", type: "Website · Skincare & Beauty", image: "/portfolio/skincare-product.svg", number: "03", tone: "silver" },
  { title: "Borcelle Fitness", type: "Website · Fitness & Wellness", image: "/portfolio/fitness-website.svg", number: "04", tone: "dark" },
];

export default function Page() {
  return (
    <main className="portfolio-page">
      <SiteHeader />
      <section className="intro">
        <div className="eyebrow">DIGITONIX EXPERTS / SELECTED PROJECTS</div>
        <h1>Ideas made <span>visible.</span></h1>
        <p>A selection of digital storefronts and brand experiences across different industries.</p>
        <div className="hint">HOVER OVER A PROJECT TO EXPLORE <span>↘</span></div>
      </section>
      <section className="gallery" aria-label="Selected portfolio projects">
        {projects.map((project) => (
          <article className={`project ${project.tone}`} key={project.number}>
            <div className="project-image">
              <img src={project.image} alt={project.title + " website design mockup"} />
              <div className="image-overlay"><span>VIEW CONCEPT</span><b>↗</b></div>
            </div>
            <div className="project-meta">
              <div><span className="project-type">{project.type}</span><h2>{project.title}</h2></div>
              <span className="project-number">{project.number}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="closing">
        <span>HAVE A PROJECT IN MIND?</span>
        <h2>Let’s make something<br/><em>worth looking at.</em></h2>
        <Link href="/contact">Start a project <b>↗</b></Link>
      </section>
      <style jsx>{`
        .portfolio-page{min-height:100vh;background:#f5f5f2;color:#151515;overflow:hidden}
        .intro{padding:74px clamp(22px,6vw,90px) 28px;position:relative}
        .eyebrow,.hint,.project-type,.closing>span{font-size:10px;letter-spacing:2px;font-weight:800;color:#777}
        h1{font-size:clamp(46px,8vw,104px);letter-spacing:-5px;line-height:.95;margin:25px 0 16px;font-weight:900}
        h1 span{color:#ef9b18}
        .intro p{font-size:15px;color:#666;max-width:520px;line-height:1.7}
        .hint{position:absolute;right:clamp(22px,6vw,90px);bottom:36px}
        .hint span{color:#ef9b18;font-size:17px;margin-left:8px}
        .gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;padding:22px clamp(16px,4vw,60px) 80px}
        .project{min-width:0;background:white;border-radius:4px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.045);transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}
        .project:hover{transform:translateY(-8px);box-shadow:0 24px 55px rgba(0,0,0,.13)}
        .project-image{position:relative;overflow:hidden;aspect-ratio:16/9;background:#e9e9e9}
        .project-image img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 1.1s cubic-bezier(.2,.7,.2,1);animation:softFloat 8s ease-in-out infinite alternate}
        .project:nth-child(even) .project-image img{animation-delay:-3s}
        .project:hover .project-image img{transform:scale(1.055)}
        .image-overlay{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:22px;background:linear-gradient(transparent,rgba(0,0,0,.48));color:white;opacity:0;transition:opacity .35s}
        .image-overlay span{font-size:10px;letter-spacing:2px;font-weight:800}
        .image-overlay b{font-size:24px}
        .project:hover .image-overlay{opacity:1}
        .project-meta{display:flex;justify-content:space-between;align-items:center;padding:20px 22px 22px}
        .project-type{font-size:9px;letter-spacing:1.5px}
        h2{font-size:clamp(18px,2vw,25px);margin:8px 0 0;letter-spacing:-.6px}
        .project-number{font-size:11px;font-weight:800;background:#171717;color:#fff;border-radius:30px;padding:8px 10px}
        .closing{margin:0 clamp(16px,4vw,60px) 70px;padding:65px 30px;background:#171717;color:white;text-align:center;border-radius:5px}
        .closing>span{color:#b8b8b8}
        .closing h2{font-size:clamp(34px,5vw,64px);line-height:1.02;letter-spacing:-2px;margin:20px 0 28px}
        .closing h2 em{font-style:normal;color:#f3a51d}
        .closing a{display:inline-flex;gap:28px;align-items:center;background:#f3a51d;color:#171717;text-decoration:none;padding:14px 23px;border-radius:30px;font-weight:800}
        @keyframes softFloat{from{transform:scale(1)}to{transform:scale(1.018)}}
        @media(max-width:760px){.intro{padding-top:52px}.intro h1{letter-spacing:-2.5px}.hint{position:static;margin-top:25px}.gallery{grid-template-columns:1fr;gap:18px;padding-bottom:54px}.project-meta{padding:16px}.closing{margin-bottom:36px;padding:48px 20px}.image-overlay{opacity:.7}}
        @media(prefers-reduced-motion:reduce){.project,.project-image img,.image-overlay{transition:none;animation:none}}
      `}</style>
    </main>
  );
}
