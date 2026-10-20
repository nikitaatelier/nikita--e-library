import { Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";

function BookCard({ book, onSelect }) {
  return (
    <article className={`book-card ${book.accent}`}>
      <div className="book-cover">
        <span className="cover-sparkle">✦</span>
        <span className="book-emoji">{book.emoji}</span>
        <span className="cover-label">{book.category}</span>
      </div>

      <div className="book-card-body">
        <div className="rating"><Star size={14} fill="currentColor" /> {book.rating}</div>
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <p className="book-description">{book.description}</p>

        <div className="book-meta">
          <span>{book.pages} pages</span>
          <span>{book.year}</span>
        </div>

        <div className="card-actions">
          <Link
            className="text-link"
            to="/borrow"
            onClick={() => onSelect?.(book)}
          >
            Borrow <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BookCard;