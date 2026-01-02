export default function Footer() {
    return (
      <footer style={{borderTop:"1px solid var(--border)", padding:"26px 0"}}>
        <div className="container" style={{display:"flex", justifyContent:"space-between", gap:12, flexWrap:"wrap"}}>
          <div style={{color:"var(--muted)"}}>© {new Date().getFullYear()} Sunny Kasuvojula</div>
          <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
            <a className="pill" href="mailto:sunny.kasuvojula@gmail.com">Email</a>
            <a className="pill" href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            <a className="pill" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  