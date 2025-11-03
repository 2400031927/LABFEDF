function BookItem({ book, addToCart }) {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Price: ₹{book.price}</p>
      <p>{book.availability}</p>
      <button
        disabled={book.availability === "Out of Stock"}
        onClick={() => addToCart(book)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default BookItem;
