export default function Manifesto() {
    return (
      <section className="manifesto" id="about">
        <div className="manifesto-visual reveal">
          <div className="manifesto-ring" />
          <div className="manifesto-ring" />
          <div className="manifesto-ring" />
          <div className="manifesto-center">
            <div className="manifesto-center-text">O(1)</div>
            <div className="manifesto-center-sub">constant efficiency</div>
          </div>
        </div>
        <div className="manifesto-body reveal reveal-delay-2">
          <div className="section-tag">Our Belief</div>
          <blockquote>"The best marketing is <em>invisible</em> — it just feels like the right answer."</blockquote>
          <p>O(1) is named after the computer science concept of constant-time complexity — an operation that performs identically regardless of scale. That's our standard for marketing.<br /><br />We work exclusively with technology companies because great technology deserves great storytelling.</p>
        </div>
      </section>
    );
  }