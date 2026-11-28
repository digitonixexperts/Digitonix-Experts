"use client";

import SiteHeader from "../components/SiteHeader";

const projects = [
  {
    name: "Caffè Nero",
    type: "Coffee & Hospitality Website",
    url: "https://www.caffenero.com/us",
    image: "https://image.thum.io/get/width/1200/fullpage/noanimate/https://www.caffenero.com/us",
  },
  {
    name: "PureGym",
    type: "Fitness & Wellness Website",
    url: "https://www.puregym.com/us/",
    image: "https://image.thum.io/get/width/1200/fullpage/noanimate/https://www.puregym.com/us/",
  },
  {
    name: "Catbird",
    type: "Jewellery & E-commerce Website",
    url: "https://www.catbirdnyc.com/",
    image: "https://image.thum.io/get/width/1200/fullpage/noanimate/https://www.catbirdnyc.com/",
  },
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7f8fa", color: "#101828" }}>
      <SiteHeader />
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 22px 90px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: "#6b46c1", fontWeight: 700, letterSpacing: 2, fontSize: 12, textTransform: "uppercase" }}>Our Work</p>
          <h1 style={{ fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.08, margin: "12px 0", fontWeight: 800 }}>Selected Website Projects</h1>
          <p style={{ maxWidth: 650, margin: "0 auto", color: "#667085", fontSize: 17, lineHeight: 1.7 }}>Explore full-page website previews from our portfolio.</p>
        </div>
        <div style={{ display: "grid", gap: 34 }}>
          {projects.map((project) => (
            <article key={project.name} style={{ background: "#fff", border: "1px solid #e7e9ee", borderRadius: 22, overflow: "hidden", boxShadow: "0 12px 36px rgba(16,24,40,.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", padding: "22px 26px" }}>
                <div>
                  <h2 style={{ fontSize: 25, fontWeight: 750, margin: 0 }}>{project.name}</h2>
                  <p style={{ color: "#667085", margin: "6px 0 0" }}>{project.type}</p>
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" style={{ color: "#6b46c1", fontWeight: 700, textDecoration: "none" }}>Visit website ↗</a>
              </div>
              <div style={{ background: "#eef0f4", padding: 14 }}>
                <img src={project.image} alt={project.name + " full-page website screenshot"} loading="lazy" style={{ display: "block", width: "100%", height: "auto", borderRadius: 10, background: "#fff" }} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
