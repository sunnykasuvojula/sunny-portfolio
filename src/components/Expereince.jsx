export default function Experience() {
    return (
      <section id="experience" className="section">
        <div className="container">
          <h2 className="sectionTitle">Experience</h2>
          <p className="sectionSubtitle">Industry experience plus project-driven full-stack development.</p>
  
          <div className="card" style={{padding:"18px"}}>
            <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:10}}>
              <div>
                <h3 style={{margin:"0 0 4px"}}>Associate Technology — BNED LoudCloud</h3>
                <p style={{margin:0, color:"var(--muted)"}}>May 2021 – Sep 2022</p>
              </div>
              <span className="pill">Angular • Java APIs • Testing</span>
            </div>
  
            <ul style={{margin:"14px 0 0", paddingLeft:18, lineHeight:1.7}}>
              <li>Developed and maintained Angular UI features to improve usability and performance.</li>
              <li>Integrated frontend with Java backend APIs, improving data flow and reliability.</li>
              <li>Wrote unit tests for Angular and Java components to improve stability.</li>
              <li>Optimized UI for accessibility, performance, and web standards.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  