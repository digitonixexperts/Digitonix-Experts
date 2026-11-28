"use client";

import SiteHeader from "../components/SiteHeader";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7f8fa", color: "#101828" }}>
      <SiteHeader />
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "42px 18px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{ color: "#6b46c1", fontWeight: 700, letterSpacing: 2, fontSize: 12, textTransform: "uppercase" }}>Our Work</p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.1, margin: "10px 0", fontWeight: 800 }}>PureGym Website</h1>
          <p style={{ color: "#667085", fontSize: 16, lineHeight: 1.6 }}>Full-page website showcase</p>
        </div>
        <article style={{ background: "#fff", border: "1px solid #e7e9ee", borderRadius: 18, overflow: "hidden", boxShadow: "0 12px 36px rgba(16,24,40,.07)" }}>
          <img
            src="https://image.thum.io/get/width/1200/fullpage/noanimate/wait/5/https://www.puregym.com/us/"
            alt="PureGym full-page website screenshot"
            loading="eager"
            style={{ display: "block", width: "100%", height: "auto", background: "#fff" }}
          />
        </article>
      </section>
    </main>
  );
}
