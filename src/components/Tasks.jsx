import { Trash2 , NotebookText } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  return (
    <ul className=" space-y-4 p-6 bg-gray-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-500 p-2 rounded-md text-white flex-1 ${
              task.iscompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-500 p-2 rounded-md text-white">
            <NotebookText />
          </button>
          <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-500 p-2 rounded-md text-white">
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
