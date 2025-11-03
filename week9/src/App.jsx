import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import booksData from "./data/books.json";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";
import "./App.css";

function App() {
  const [books] = useState(booksData);

  return (
    <Router>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">📚 Book Explorer</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            }
          />
          <Route path="/book/:id" element={<BookDetail books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
