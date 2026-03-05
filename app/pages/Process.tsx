const steps = [
    { n: "01", title: "Diagnose", desc: "We audit your current positioning, ICP clarity, and competitive landscape before touching a single deliverable." },
    { n: "02", title: "Architect", desc: "A custom go-to-market blueprint — channel mix, messaging hierarchy, and campaign logic — built for your stage." },
    { n: "03", title: "Execute", desc: "Precision deployment across every channel. Every asset engineered to convert, not just impress." },
    { n: "04", title: "Optimize", desc: "Continuous refinement against signal data. We don't run campaigns, we run experiments at scale." },
  ];
  
  export default function Process() {
    return (
      <section className="process" id="process">
        <div className="section-header reveal">
          <div>
            <div className="section-tag">How we work</div>
            <h2 className="section-title">The<br /><em>method</em></h2>
          </div>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={step.n} className={`process-step reveal reveal-delay-${i + 1}`}>
              <div className="step-num">{step.n}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }