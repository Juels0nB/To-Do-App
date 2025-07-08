import "./App.css";
import Tasks from "./components/Tasks";

import AddTask from "./components/AddTask";
import {v4} from "uuid";
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
      iscompleted: true,
    },
    {
      id: 3,
      title: "Learn Tailwind CSS",
      description: "Understand the basics of Tailwind CSS for styling",
      priority: "Low",
      dueDate: "2025-08-15",
      iscompleted: true,
    },
  ]);

  function onTaskClick(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, iscompleted: !task.iscompleted };
      }
      return task;
    });
    setTask(updatedTasks);
    
  }

  function onAddTaskSubmit(title, description, priority, dueDate) {
    const newTask = {
      id: v4() ,
      title,
      description,
      priority,
      dueDate,
      iscompleted: false,
    };
    setTask([...tasks, newTask]);


  }

  function onDeleteTaskClick(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTask(updatedTasks);
  }
  return (
    <div className="w-screen h-screen  bg-gray-500 flex justify-center p6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-center text-slate-100 font-mono">
          Go do it
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <h1 className="text-2xl text-center text-slate-100 font-mono">
          My tasks
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}  />
      </div>
    </div>
  );
}

export default App;
