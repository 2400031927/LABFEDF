import { useParams, Link } from "react-router-dom";

function BookDetail({ books }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Book not found!</p>
        <Link to="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 border p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <p className="text-gray-700 mb-2">Author: {book.author}</p>
      <p className="mb-4">{book.description}</p>
      <p className="font-semibold">Rating: ⭐ {book.rating}</p>
      <Link to="/" className="block mt-4 text-blue-600 underline">
        Back to Home
      </Link>
    </div>
  );
}

export default BookDetail;
