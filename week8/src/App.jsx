import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import tasksData from "./data/tasks.json";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📝 To-Do List</h1>
      <TaskForm addTask={addTask} />
      {tasks.length === 0 ? (
        <p className="mt-6 text-gray-500 italic">No tasks found 😴</p>
      ) : (
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;
