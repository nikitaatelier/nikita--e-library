import { NavLink, Link } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark"><BookOpen size={20} /></span>
          <span>leaf<span>&</span>lore</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/browse" onClick={closeMenu}>Browse</NavLink>
          <NavLink to="/borrow" onClick={closeMenu}>Borrow</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <Link className="nav-cta" to="/browse" onClick={closeMenu}>Explore books <span>↗</span></Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;