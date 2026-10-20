import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import BookCard from "../components/BookCard";
import { books, categories } from "../data/books";

function Browse({ onSelectBook }) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Featured");

  const filteredBooks = useMemo(() => {
    let result = books.filter(book => {
      const search = keyword.toLowerCase().trim();
      const matchesKeyword =
        !search ||
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search) ||
        book.category.toLowerCase().includes(search);

      const matchesCategory =
        category === "All Categories" || book.category === category;

      return matchesKeyword && matchesCategory;
    });

    if (sort === "Rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }
    if (sort === "Newest") {
      result = [...result].sort((a, b) => b.year - a.year);
    }
    if (sort === "A–Z") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [keyword, category, sort]);

  const clearFilters = () => {
    setKeyword("");
    setCategory("All Categories");
    setSort("Featured");
  };

  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">the library</span>
          <h1>Find a book that feels <em>right.</em></h1>
          <p>Search our little collection by title, author, or category.</p>
        </div>

        <div className="search-panel">
          <div className="search-input-wrap">
            <Search size={19} />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search title, author, or keyword..."
              aria-label="Search books"
            />
          </div>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(item => <option key={item}>{item}</option>)}
          </select>

          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>Featured</option>
            <option>Rating</option>
            <option>Newest</option>
            <option>A–Z</option>
          </select>

          <button className="filter-button" onClick={() => {}}>
            <SlidersHorizontal size={17} /> Filter
          </button>
        </div>

        <div className="results-row">
          <p><strong>{filteredBooks.length}</strong> books found</p>
          {(keyword || category !== "All Categories" || sort !== "Featured") && (
            <button className="clear-button" onClick={clearFilters}>
              Clear filters <X size={14} />
            </button>
          )}
        </div>

        {filteredBooks.length > 0 ? (
          <div className="book-grid browse-grid">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} onSelect={onSelectBook} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>📖</span>
            <h3>No books found</h3>
            <p>Try a different search word or clear your filters.</p>
            <button className="btn btn-primary" onClick={clearFilters}>Show all books</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Browse;