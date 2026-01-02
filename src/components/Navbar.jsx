export default function Navbar() {
    return (
      <header style={{
        position:"sticky", top:0, zIndex:50,
        background:"rgba(255,255,255,0.9)",
        backdropFilter:"blur(10px)",
        borderBottom:"1px solid var(--border)"
      }}>
        <div className="container" style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"14px 0"
        }}>
          <a href="#top" style={{fontWeight:800, letterSpacing:"-0.02em"}}>
            Sunny Kasuvojula
          </a>
  
          <nav style={{display:"flex", gap:14, alignItems:"center", flexWrap:"wrap", justifyContent:"flex-end"}}>
            <a href="#projects" className="pill">Projects</a>
            <a href="#skills" className="pill">Skills</a>
            <a href="#experience" className="pill">Experience</a>
            <a href="#about" className="pill">About</a>
            <a href="#contact" className="pill">Contact</a>
  
            <a className="btn btnGhost" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btnPrimary" href="/Sunny_Kasuvojula_Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </nav>
        </div>
      </header>
    );
  }
  