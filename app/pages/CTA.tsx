import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="cta-tag">Ready to scale?</div>
      <h2 className="cta-headline">Let's build<br />something<br /><em>efficient.</em></h2>
      <div className="cta-actions">
        <Link href="/contact" target="_blank" rel="noopener noreferrer">
          <button className="btn-white">Start a project</button>
        </Link>
      </div>
    </section>
  );
}