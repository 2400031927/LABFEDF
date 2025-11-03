import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <Link
        to={`/book/${book.id}`}
        className="text-blue-500 mt-2 inline-block hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
