import { Trash2 , NotebookText } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title); 
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

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
          <button onClick={()=> onSeeDetailsClick(task)} className="bg-slate-500 p-2 rounded-md text-white">
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
