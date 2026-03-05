const work = [
    { idx: "001", name: "Vertex Systems", type: "Brand & Campaign", year: "2025" },
    { idx: "002", name: "Forma AI", type: "Go-to-Market", year: "2025" },
    { idx: "003", name: "Cascade Cloud", type: "Growth Strategy", year: "2024" },
    { idx: "004", name: "Nullpoint Labs", type: "Full-Stack Campaign", year: "2024" },
    { idx: "005", name: "Arch Protocol", type: "Brand Architecture", year: "2024" },
  ];
  
  export default function Work() {
    return (
      <section className="work" id="work">
        <div className="section-header reveal">
          <div>
            <div className="section-tag">Selected Work</div>
            <h2 className="section-title">Proof of<br /><em>output</em></h2>
          </div>
          <p className="section-desc">From zero-to-market to enterprise scale.</p>
        </div>
        <div className="work-list reveal reveal-delay-1">
          {work.map(w => (
            <div key={w.idx} className="work-item">
              <span className="work-idx">{w.idx}</span>
              <span className="work-name">{w.name}</span>
              <span className="work-type">{w.type}</span>
              <span className="work-year">{w.year}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }