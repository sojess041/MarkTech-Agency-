function O1Logo({ size = 36, color = "#166534" }: { size?: number; color?: string }) {
    return (
      <svg width={size} height={size} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="52" cy="60" r="48" fill={color} />
        <circle cx="52" cy="60" r="22" fill="#080808" />
        <text x="108" y="72" fontFamily="'DM Serif Display', serif" fontSize="38" fill={color} fontStyle="italic">(1)</text>
      </svg>
    );
  }
  
  export default function Hero() {
    return (
      <section className="hero">
        <div className="hero-bg-text" aria-hidden>O(1)</div>
        <div className="hero-content">
          <div className="hero-tag">Technology & Advertising Agency</div>
  
          {/* Logo mark above headline */}
          <div style={{ marginBottom: "32px" }}>
            <O1Logo size={100} color="#166534" />
          </div>
  
          <h1 className="hero-headline">
            Marketing that<br /><em>scales</em> like<br />your product.
          </h1>
          <p className="hero-sub">
            We connect ambitious tech companies with the audiences that matter — with constant efficiency, zero noise.
          </p>
          <div className="hero-actions">
            <button className="btn-primary"><span>See our work</span></button>
            <a href="#services" className="btn-ghost">Our services →</a>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-stat"><span className="hero-stat-num">47+</span><span className="hero-stat-label">Tech clients</span></div>
          <div className="hero-stat"><span className="hero-stat-num">3.2×</span><span className="hero-stat-label">Avg. pipeline growth</span></div>
          <div className="hero-stat"><span className="hero-stat-num">O(1)</span><span className="hero-stat-label">Constant efficiency</span></div>
        </div>
      </section>
    );
  }