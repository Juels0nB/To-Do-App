import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Study React",
      description: "Learn the basics of React",
      priority: "High",
      dueDate: "2025-06-27",
      iscompleted: false,
    },
    {
      id: 2,
      title: "Build a To-Do App",
      description: "Create a simple To-Do application using React",
      priority: "Medium",
      dueDate: "2025-07-20",
      iscompleted: false,
    },
    {
      id: 3,
      title: "Learn Tailwind CSS",
      description: "Understand the basics of Tailwind CSS for styling",
      priority: "Low",
      dueDate: "2025-08-15",
      iscompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen  bg-gray-500 flex justify-center p6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-center text-slate-100 font-mono">
          Go do it
        </h1>
        <AddTask setTask={setTask}/>
        <h1 className="text-2xl text-center text-slate-100 font-mono">
          My tasks
        </h1>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
