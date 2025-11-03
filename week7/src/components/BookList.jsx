import BookItem from "./BookItem";

function BookList({ books, addToCart }) {
  return (
    <section className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} addToCart={addToCart} />
      ))}
    </section>
  );
}

export default BookList;
