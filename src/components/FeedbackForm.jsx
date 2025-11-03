import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../features/feedbackSlice";

function FeedbackForm() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      alert("Please select a rating before submitting!");
      return;
    }
    dispatch(addFeedback({ rating, comment }));
    setRating("");
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-lg font-semibold">Feedback Form</h2>

      <label>
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="block w-full mt-1 border rounded"
        >
          <option value="">Select Rating</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </label>

      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block w-full mt-1 border rounded"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Feedback
      </button>
    </form>
  );
}

export default FeedbackForm;
