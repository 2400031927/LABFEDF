import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import "./App.css";
import booksData from "./data/books.json";

function App() {
  const [books] = useState(booksData);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    if (!cart.find((b) => b.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((b) => b.id !== id));
  };

  return (
    <div className="app">
      <h1>📚 Online Bookstore</h1>
      <BookList books={books} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
