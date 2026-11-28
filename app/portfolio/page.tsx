"use client";

import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function Page() {
  return (
    <main className="portfolio-page">
      <SiteHeader />
      <section className="portfolio-empty">
        <span className="eyebrow">DIGITONIX EXPERTS · OUR WORK</span>
        <h1>Our portfolio is<br /><em>being refreshed.</em></h1>
        <p>We’re preparing a fresh collection of website designs, e-commerce stores, digital campaigns, mobile apps and brand identities. New work will appear here soon.</p>
        <Link href="/contact">Start a project <b>↗</b></Link>
      </section>
      <style jsx>{`
        .portfolio-page{min-height:100vh;background:#f7f7f5;color:#171717}
        .portfolio-empty{min-height:calc(100vh - 90px);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:60px 22px;position:relative;overflow:hidden}
        .portfolio-empty:before,.portfolio-empty:after{content:"";position:absolute;border-radius:50%;filter:blur(2px);z-index:0;opacity:.45}
        .portfolio-empty:before{width:260px;height:260px;background:radial-gradient(circle,#ffd98c,#ff9d00);left:-90px;top:12%}
        .portfolio-empty:after{width:210px;height:210px;background:radial-gradient(circle,#b9e9dc,#55bba6);right:-60px;bottom:8%}
        .portfolio-empty>*{position:relative;z-index:1}
        .eyebrow{font-size:11px;letter-spacing:2.5px;font-weight:850;color:#777}
        h1{font-size:clamp(42px,7vw,82px);line-height:.98;letter-spacing:-3px;margin:22px 0;font-weight:900}
        h1 em{font-style:normal;color:#f59b08}
        p{max-width:590px;font-size:16px;line-height:1.75;color:#686868;margin:0 0 28px}
        a{display:inline-flex;gap:24px;align-items:center;background:#171717;color:#fff;text-decoration:none;padding:15px 23px;border-radius:40px;font-weight:750}
        a:hover{background:#f59b08;color:#171717}
        @media(max-width:600px){h1{font-size:46px;letter-spacing:-2px}p{font-size:14px}.portfolio-empty{min-height:80vh}}
      `}</style>
    </main>
  );
}
