export default function About() {
    return (
      <section id="about" className="section" style={{background:"#f8fafc"}}>
        <div className="container">
          <h2 className="sectionTitle">About</h2>
          <p className="sectionSubtitle">
            Short and recruiter-friendly — focused on what you build and what you’re looking for.
          </p>
  
          <div className="card" style={{padding:"18px"}}>
            <p style={{margin:"0 0 10px", color:"var(--text)", lineHeight:1.8}}>
              I’m a full-stack JavaScript developer focused on building practical web applications —
              authentication, APIs, dashboards, and real workflows. I enjoy taking MVP ideas from concept
              to deployment and improving the product with clean UI and performance.
            </p>
            <p style={{margin:0, color:"var(--muted)", lineHeight:1.8}}>
              Currently seeking junior full-stack opportunities (Remote/Canada). I’m open to internships,
              contracts, and startup teams where I can ship features quickly and grow.
            </p>
          </div>
        </div>
      </section>
    );
  }
  