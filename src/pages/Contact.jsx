import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section page-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">say hello</span>
            <h1>Have a question? <em>Let's chat.</em></h1>
            <p>
              Looking for a recommendation, spotted a missing title, or simply want to
              say hi? Our tiny inbox is always open.
            </p>

            <div className="contact-details">
              <a href="mailto:hello@leafandlore.com">
                <span><Mail /></span>
                <div><small>Email</small><strong>hello@leafandlore.com</strong></div>
              </a>
              <a href="tel:+919876543210">
                <span><Phone /></span>
                <div><small>Phone</small><strong>+91 98765 43210</strong></div>
              </a>
              <div>
                <span><MapPin /></span>
                <div><small>Based in</small><strong>Mumbai, India</strong></div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="contact-success">
                <CheckCircle2 size={42} />
                <h2>Message sent!</h2>
                <p>Thanks for reaching out. We'll get back to you soon.</p>
                <button type="button" className="soft-link" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <>
                <div className="two-inputs">
                  <div>
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" required placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="6" required placeholder="Write your message here..."></textarea>
                </div>
                <button className="btn btn-primary full-btn" type="submit">
                  Send message <Send size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;