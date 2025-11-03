import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="w-full max-w-md bg-white shadow-lg rounded p-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center border-b py-2"
        >
          <span
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
