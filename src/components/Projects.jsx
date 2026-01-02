import { projects } from "../data/projects";

function ProjectCard({ p }) {
  return (
    <div className="card" style={{padding:"18px"}}>
      <div style={{display:"flex", justifyContent:"space-between", gap:10, alignItems:"flex-start"}}>
        <div>
          <h3 style={{margin:"0 0 6px"}}>{p.title}</h3>
          <p style={{margin:"0 0 10px", color:"var(--muted)", lineHeight:1.6}}>{p.tagline}</p>
        </div>
        <span className="pill">Featured</span>
      </div>

      <ul style={{margin:"10px 0 12px", paddingLeft:18, color:"var(--text)", lineHeight:1.7}}>
        {p.highlights.map((h)=> <li key={h}>{h}</li>)}
      </ul>

      <div style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:12}}>
        {p.tech.map((t)=> <span key={t} className="pill">{t}</span>)}
      </div>

      <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
        <a className="btn btnPrimary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
        <a className="btn btnGhost" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="sectionTitle">Featured Projects</h2>
        <p className="sectionSubtitle">
          Projects that demonstrate end-to-end development: UI, APIs, authentication, and deployment.
        </p>

        <div className="grid grid3">
          {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
