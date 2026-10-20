import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">✿</span>
            <span>leaf<span>&</span>lore</span>
          </Link>
          <p className="footer-copy">
            A tiny digital corner for curious minds, cozy reading, and stories worth keeping.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/browse">Library</Link>
          <Link to="/borrow">Borrow a book</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div>
          <h4>Say hello</h4>
          <a href="mailto:hello@leafandlore.com"><Mail size={15} /> hello@leafandlore.com</a>
          <a href="tel:+919876543210"><Phone size={15} /> +91 98765 43210</a>
          <a href="#"><Instagram size={15} /> @leafandlore</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Leaf & Lore</span>
        <span>Made with curiosity ♡</span>
      </div>
    </footer>
  );
}

export default Footer;