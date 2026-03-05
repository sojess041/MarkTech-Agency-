const services = [
    { num: "01", name: "Growth Architecture", desc: "Strategic frameworks engineered for scale. We map the shortest path between your technology and the audiences that need it most.", tags: ["Strategy","GTM","Positioning"] },
    { num: "02", name: "Narrative Design", desc: "Complex technology, translated. We craft the stories that make cutting-edge products feel inevitable — not intimidating.", tags: ["Brand Voice","Messaging","Content"] },
    { num: "03", name: "Precision Media", desc: "Zero wasted impressions. We deploy audience intelligence and channel optimization to reach decision-makers, not bystanders.", tags: ["Paid Media","Analytics","ABM"] },
  ];
  
  export default function Services() {
    return (
      <section className="services" id="services">
        <div className="section-header reveal">
          <div>
            <div className="section-tag">What we do</div>
            <h2 className="section-title">Built for<br /><em>precision</em></h2>
          </div>
          <p className="section-desc">Three focused disciplines. One objective: constant growth at constant efficiency.</p>
        </div>
        <div className="services-grid reveal reveal-delay-1">
          {services.map(s => (
            <div key={s.num} className="service-card">
              <div className="service-num">{s.num}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }