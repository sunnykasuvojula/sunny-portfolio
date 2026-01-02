export default function Hero() {
    return (
      <section id="top" className="section" style={{paddingTop: "78px"}}>
        <div className="container">
          <div className="card" style={{padding:"26px"}}>
            <div className="grid grid2" style={{alignItems:"center"}}>
              {/* Left: photo */}
              <div style={{display:"flex", gap:16, alignItems:"center"}}>
                <div style={{
                  width:92, height:92, borderRadius:20,
                  border:"1px solid var(--border)",
                  background:"#f1f5f9",
                  overflow:"hidden"
                }}>
                  {/* Put your image in public/profile.jpg or replace with your own path */}
                  <img
                    src="/profile.jpg"
                    alt="Sunny Kasuvojula"
                    style={{width:"100%", height:"100%", objectFit:"cover"}}
                    onError={(e)=>{ e.currentTarget.style.display="none"; }}
                  />
                </div>
  
                <div>
                  <div className="pill">Open to Remote / Canada</div>
                  <h1 style={{margin:"10px 0 6px", fontSize:34, letterSpacing:"-0.03em"}}>
                    Full-Stack JavaScript Developer
                  </h1>
                  <p style={{margin:0, color:"var(--muted)", lineHeight:1.7}}>
                    I build production-style web apps with secure authentication, APIs, and clean responsive UI.
                  </p>
                </div>
              </div>
  
              {/* Right: CTAs */}
              <div style={{display:"flex", gap:12, justifyContent:"flex-end", flexWrap:"wrap"}}>
                <a className="btn btnPrimary" href="#projects">View Projects</a>
                <a className="btn btnGhost" href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn btnGhost" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn btnGhost" href="/Sunny_Kasuvojula_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>
            </div>
  
            <hr className="hr" />
  
            <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
              {["React", "Node.js", "Express", "MongoDB", "REST/GraphQL", "JWT Auth"].map((t)=>(
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  