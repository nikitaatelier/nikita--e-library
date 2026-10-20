import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero section">
      <div className="hero-doodle doodle-one">✦</div>
      <div className="hero-doodle doodle-two">〰</div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={15} /> a cozy corner for curious minds</span>
          <h1>Stories, ideas & <em>little sparks</em> of wonder.</h1>
          <p>
            Discover your next favorite read in a beautifully simple digital library.
            Search, save, and borrow books whenever inspiration calls.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/browse">
              Browse the library <ArrowRight size={17} />
            </Link>
            <Link className="soft-link" to="/contact">Need a recommendation?</Link>
          </div>

          <div className="hero-note">
            <div className="avatar-stack">
              <span>🌷</span><span>📚</span><span>☕</span>
            </div>
            <p><strong>1,200+ readers</strong><br />are discovering something new.</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Illustration of a cozy digital library">
          <div className="art-sun"></div>
          <div className="floating-note note-top">read<br />slowly ♡</div>
          <div className="floating-note note-bottom">good<br />stories →</div>
          <div className="book-stack">
            <div className="stack-book stack-back">dreams</div>
            <div className="stack-book stack-mid">ideas</div>
            <div className="stack-book stack-front">stories</div>
            <div className="tiny-flower">✿</div>
          </div>
          <div className="plant">
            <span className="leaf leaf-a">◜</span>
            <span className="leaf leaf-b">◝</span>
            <span className="pot">⌒</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;