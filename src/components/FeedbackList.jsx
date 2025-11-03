import { useSelector } from "react-redux";

function FeedbackList() {
  const feedbacks = useSelector((state) => state.feedback);

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Submitted Feedback</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback yet.</p>
      ) : (
        feedbacks.map((f, index) => (
          <div key={index} className="border-b py-2">
            <p>⭐ Rating: {f.rating}</p>
            {f.comment && <p>💬 Comment: {f.comment}</p>}
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;
