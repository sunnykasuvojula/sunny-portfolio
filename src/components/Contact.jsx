export default function Contact() {
    return (
      <section id="contact" className="section">
        <div className="container">
          <h2 className="sectionTitle">Contact</h2>
          <p className="sectionSubtitle">
            The fastest way to reach me is email. I reply quickly.
          </p>
  
          <div className="grid grid2">
            <div className="card" style={{padding:"18px"}}>
              <h3 style={{margin:"0 0 10px"}}>Let’s talk</h3>
              <p style={{margin:"0 0 14px", color:"var(--muted)", lineHeight:1.7}}>
                If you’re hiring a junior full-stack JS developer, I’d love to connect.
              </p>
  
              <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
                <a className="btn btnPrimary" href="mailto:sunny.kasuvojula@gmail.com">Email Me</a>
                <a className="btn btnGhost" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn btnGhost" href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
              </div>
  
              <hr className="hr" />
  
              <div style={{display:"grid", gap:8, color:"var(--muted)"}}>
                <div><strong style={{color:"var(--text)"}}>Email:</strong> sunny.kasuvojula@gmail.com</div>
                <div><strong style={{color:"var(--text)"}}>Location:</strong> Toronto, ON (Remote/Canada)</div>
              </div>
            </div>
  
            <div className="card" style={{padding:"18px"}}>
              <h3 style={{margin:"0 0 10px"}}>Quick message</h3>
              <form onSubmit={(e)=>{e.preventDefault(); alert("Connect this to EmailJS/Formspree if you want.");}}>
                <label style={{display:"block", marginBottom:6, fontWeight:600}}>Name</label>
                <input style={inputStyle} placeholder="Your name" />
  
                <label style={{display:"block", margin:"12px 0 6px", fontWeight:600}}>Email</label>
                <input style={inputStyle} placeholder="your@email.com" />
  
                <label style={{display:"block", margin:"12px 0 6px", fontWeight:600}}>Message</label>
                <textarea style={{...inputStyle, minHeight:110}} placeholder="Type your message..." />
  
                <button className="btn btnPrimary" style={{marginTop:12, width:"100%"}}>
                  Send Message
                </button>
                <p style={{margin:"10px 0 0", color:"var(--muted)", fontSize:12}}>
                  (Optional) Connect to EmailJS or Formspree later.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  const inputStyle = {
    width:"100%",
    padding:"12px 12px",
    borderRadius:12,
    border:"1px solid var(--border)",
    outline:"none",
    fontSize:14
  };
  