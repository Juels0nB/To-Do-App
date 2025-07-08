import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <div className="space-y-4 p-6 bg-gray-200 rounded-md shadow">
      <input
        type="text"
        placeholder="Title of task"
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description of task"
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <select
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
        type="date"
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
      ></input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Please fill in all fields");
            return;
          }
          onAddTaskSubmit(title, description, priority, dueDate);
          setTitle("");
          setDescription("");
          setPriority("");
          setDueDate("");
        }}
        className="w-full bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600 "
      >
        Add Task{}
      </button>
    </div>
  );
}
export default AddTask;
