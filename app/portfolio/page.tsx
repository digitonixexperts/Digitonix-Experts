"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const project = {
  title: "Caffè Nero",
  type: "Website · Coffee & Café",
  image: "https://image.thum.io/get/width/1200/crop/1600/noanimate/https://www.caffenero.com/us",
};

export default function Page() {
  return (
    <main className="portfolio-page">
      <SiteHeader />
      <section className="intro">
        <div className="eyebrow">DIGITONIX EXPERTS / SELECTED PROJECT</div>
        <h1>Digital experiences,<br /><span>in motion.</span></h1>
        <p>A featured website experience for a modern coffee brand.</p>
        <div className="hint">SCROLL THE PAGE PREVIEW <span>↓</span></div>
      </section>

      <section className="reel" aria-label="Featured portfolio project">
        <article className="project">
          <a className="preview" href="https://www.caffenero.com/us" target="_blank" rel="noreferrer" aria-label="Open Caffè Nero website">
            <div className="browser-bar">
              <div className="browser-dots"><i /><i /><i /></div>
              <span>caffenero.com/us</span>
              <b>↗</b>
            </div>
            <div className="screen">
              <img src={project.image} alt="Caffè Nero website full-page preview" />
            </div>
            <div className="preview-label">LIVE WEBSITE <span>↗</span></div>
          </a>
          <div className="project-meta">
            <div>
              <span className="project-type">{project.type}</span>
              <h2>{project.title}</h2>
              <p>Brand-led digital storefront with coffee, food, drinks and mobile ordering experiences.</p>
            </div>
            <a className="visit" href="https://www.caffenero.com/us" target="_blank" rel="noreferrer">Visit website <b>↗</b></a>
          </div>
        </article>
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
        h1 span{color:#b58a43}
        .intro p{font-size:15px;color:#666;max-width:520px;line-height:1.7}
        .hint{position:absolute;right:clamp(22px,6vw,90px);bottom:36px}
        .hint span{color:#b58a43;font-size:17px;margin-left:8px}
        .reel{padding:22px clamp(16px,4vw,60px) 80px}
        .project{max-width:1120px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 18px 60px rgba(0,0,0,.09)}
        .preview{display:block;position:relative;text-decoration:none;color:#fff;background:#161616;overflow:hidden}
        .browser-bar{height:44px;background:#202020;display:flex;align-items:center;justify-content:center;position:relative;font-size:11px;color:#c9c9c9;letter-spacing:.4px}
        .browser-dots{position:absolute;left:16px;display:flex;gap:6px}
        .browser-dots i{width:8px;height:8px;border-radius:50%;background:#777}
        .browser-dots i:first-child{background:#e47e75}.browser-dots i:nth-child(2){background:#e3bd68}.browser-dots i:nth-child(3){background:#76b77d}
        .browser-bar b{position:absolute;right:16px;font-size:17px}
        .screen{height:clamp(360px,58vw,690px);overflow:hidden;position:relative;background:#eee}
        .screen img{display:block;width:100%;height:auto;min-height:100%;object-fit:cover;object-position:top;animation:reelScroll 22s ease-in-out infinite alternate}
        .preview:hover .screen img{animation-play-state:paused}
        .preview-label{position:absolute;right:20px;bottom:20px;background:#fff;color:#171717;border-radius:30px;padding:10px 16px;font-size:10px;font-weight:800;letter-spacing:1.2px;box-shadow:0 5px 20px #0002}
        .preview-label span{margin-left:10px;color:#b58a43}
        .project-meta{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:28px 32px 32px}
        .project-type{font-size:9px;letter-spacing:1.5px}
        h2{font-size:clamp(24px,3vw,36px);margin:8px 0;letter-spacing:-1px}
        .project-meta p{font-size:14px;color:#777;line-height:1.6;margin:0;max-width:560px}
        .visit{display:inline-flex;gap:24px;align-items:center;white-space:nowrap;background:#171717;color:white;text-decoration:none;padding:14px 20px;border-radius:30px;font-size:12px;font-weight:800;transition:background .2s}
        .visit:hover{background:#b58a43}
        .closing{margin:0 clamp(16px,4vw,60px) 70px;padding:65px 30px;background:#171717;color:white;text-align:center;border-radius:5px}
        .closing>span{color:#b8b8b8}
        .closing h2{font-size:clamp(34px,5vw,64px);line-height:1.02;letter-spacing:-2px;margin:20px 0 28px}
        .closing h2 em{font-style:normal;color:#c6a36b}
        .closing a{display:inline-flex;gap:28px;align-items:center;background:#c6a36b;color:#171717;text-decoration:none;padding:14px 23px;border-radius:30px;font-weight:800}
        @keyframes reelScroll{0%{transform:translateY(0)}100%{transform:translateY(min(-35%, -360px))}}
        @media(max-width:760px){.intro{padding-top:52px}.intro h1{letter-spacing:-2.5px}.hint{position:static;margin-top:25px}.reel{padding-bottom:54px}.screen{height:430px}.project-meta{padding:20px;align-items:flex-start;flex-direction:column}.visit{margin-top:4px}.closing{margin-bottom:36px;padding:48px 20px}}
        @media(prefers-reduced-motion:reduce){.screen img{animation:none}}
      `}</style>
    </main>
  );
}
