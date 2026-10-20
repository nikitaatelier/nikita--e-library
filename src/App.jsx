import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Borrow from "./pages/Borrow";
import Contact from "./pages/Contact";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse onSelectBook={setSelectedBook} />} />
          <Route
            path="/borrow"
            element={
              <Borrow
                selectedBook={selectedBook}
                onSelectBook={setSelectedBook}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;