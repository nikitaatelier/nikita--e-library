import { Link } from "react-router-dom";
import { ArrowRight, BookMarked, Clock3, Search, Sparkles } from "lucide-react";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";
import { books } from "../data/books";
import { useState } from "react";

function Home() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <Hero />

      <section className="section intro-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">why leaf & lore</span>
            <h2>A little library, made for <em>you.</em></h2>
            <p>Everything you need to turn “I should read more” into a lovely reading habit.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon icon-peach"><Search /></div>
              <h3>Find your next read</h3>
              <p>Browse by category, author, or title without getting lost in a maze of menus.</p>
            </div>
            <div className="feature-card featured-feature">
              <div className="feature-icon icon-lavender"><BookMarked /></div>
              <h3>Borrow in a few clicks</h3>
              <p>Choose a title, fill in your details, and your reading adventure is ready.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon icon-mint"><Clock3 /></div>
              <h3>Read at your pace</h3>
              <p>Save time with a clean, distraction-free library designed around the reader.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section popular-section">
        <div className="container">
          <div className="section-heading row-heading">
            <div>
              <span className="eyebrow"><Sparkles size={14} /> reader favorites</span>
              <h2>Books people are <em>loving.</em></h2>
            </div>
            <Link className="soft-link" to="/browse">See all books <ArrowRight size={16} /></Link>
          </div>

          <div className="book-grid">
            {books.slice(0, 4).map(book => (
              <BookCard key={book.id} book={book} onSelect={setSelectedBook} />
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section section">
        <div className="container quote-box">
          <span className="quote-mark">“</span>
          <blockquote>
            A room without books is like a body without a soul.
          </blockquote>
          <p>— Marcus Tullius Cicero</p>
        </div>
      </section>
    </>
  );
}

export default Home;