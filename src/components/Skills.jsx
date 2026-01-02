const blocks = [
    { title: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML/CSS", "Bootstrap/Tailwind", "Responsive UI"] },
    { title: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL", "Auth + Authorization"] },
    { title: "Database", items: ["MongoDB (Mongoose)", "MySQL (basic)"] },
    { title: "Tools", items: ["Git/GitHub", "Postman", "Vercel/Render", "NPM", "Testing basics"] },
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="section" style={{background:"#f8fafc"}}>
        <div className="container">
          <h2 className="sectionTitle">Skills</h2>
          <p className="sectionSubtitle">
            Focused on building and shipping MVPs with clean code, validation, and secure authentication.
          </p>
  
          <div className="grid grid2">
            {blocks.map(b => (
              <div key={b.title} className="card" style={{padding:"18px"}}>
                <h3 style={{margin:"0 0 10px"}}>{b.title}</h3>
                <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                  {b.items.map(i => <span key={i} className="pill">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  