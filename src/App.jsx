import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Feedback Collector
      </h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}

export default App;
