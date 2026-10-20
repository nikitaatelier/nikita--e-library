import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, BookOpen } from "lucide-react";
import { books } from "../data/books";

function Borrow({ selectedBook, onSelectBook }) {
  const [bookId, setBookId] = useState(selectedBook?.id || "");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    duration: "14 days"
  });

  useEffect(() => {
    if (selectedBook) setBookId(selectedBook.id);
  }, [selectedBook]);

  const currentBook = books.find(book => book.id === Number(bookId));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section page-section">
        <div className="container success-wrap">
          <div className="success-card">
            <div className="success-icon"><CheckCircle2 size={42} /></div>
            <span className="eyebrow">all set ♡</span>
            <h1>Your book is <em>reserved.</em></h1>
            <p>
              We've prepared <strong>{currentBook?.title || "your selected book"}</strong> for
              {form.name ? ` ${form.name}` : " you"}. Enjoy your reading journey!
            </p>
            <div className="success-actions">
              <Link className="btn btn-primary" to="/browse">Browse more books</Link>
              <Link className="soft-link" to="/">Back home</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <div className="container narrow-container">
        <Link className="back-link" to="/browse"><ArrowLeft size={16} /> Back to library</Link>

        <div className="page-heading compact">
          <span className="eyebrow">borrow a book</span>
          <h1>One small form, then <em>read away.</em></h1>
          <p>Select a book and tell us where to send your digital borrowing details.</p>
        </div>

        <form className="borrow-layout" onSubmit={handleSubmit}>
          <div className="form-card">
            <div className="form-section">
              <label htmlFor="book">Choose a book</label>
              <div className="book-select">
                <BookOpen size={18} />
                <select
                  id="book"
                  value={bookId}
                  onChange={(e) => {
                    setBookId(e.target.value);
                    onSelectBook(books.find(book => book.id === Number(e.target.value)));
                  }}
                  required
                >
                  <option value="">Select from the library</option>
                  {books.map(book => (
                    <option value={book.id} key={book.id}>{book.title} — {book.author}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-divider"></div>

            <div className="form-section">
              <div className="two-inputs">
                <div>
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="duration">Borrowing period</label>
              <select id="duration" name="duration" value={form.duration} onChange={handleChange}>
                <option>7 days</option>
                <option>14 days</option>
                <option>30 days</option>
              </select>
            </div>

            <button className="btn btn-primary full-btn" type="submit">
              Confirm my borrowing request
            </button>
            <p className="form-note">No payment required. This is a frontend demo with no backend.</p>
          </div>

          <aside className="selected-book-card">
            {currentBook ? (
              <>
                <div className={`mini-cover ${currentBook.accent}`}>{currentBook.emoji}</div>
                <span className="eyebrow">selected title</span>
                <h3>{currentBook.title}</h3>
                <p>by {currentBook.author}</p>
                <div className="mini-meta">
                  <span>{currentBook.pages} pages</span>
                  <span>★ {currentBook.rating}</span>
                </div>
              </>
            ) : (
              <div className="selected-empty">
                <span>📚</span>
                <h3>Your selected book</h3>
                <p>Pick a title from the form and its details will appear here.</p>
              </div>
            )}
          </aside>
        </form>
      </div>
    </section>
  );
}

export default Borrow;