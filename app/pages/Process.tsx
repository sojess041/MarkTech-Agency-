const steps = [
  { n: "01", title: "Diagnose", desc: "We learn your product inside out — who it's for, why it matters, and why people aren't hearing about it yet." },
  { n: "02", title: "Architect", desc: "We build a clear plan — the right message, the right channels, the right audience. Simple strategy, zero guesswork." },
  { n: "03", title: "Execute", desc: "We launch campaigns that speak human. No jargon, no noise — just your product, explained in a way that actually lands." },
  { n: "04", title: "Optimize", desc: "We watch what works and double down on it. Every week the campaigns get sharper, cheaper, and further reaching." },
];

export default function ProcessSection() {
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