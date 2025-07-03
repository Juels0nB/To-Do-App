function AddTask({ onAddTaskSubmit }) {
  return (
    <div className="space-y-4 p-6 bg-gray-200 rounded-md shadow">
        <input
            type="text"
            placeholder="Title of task"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
        />
        <input
            type="text"
            placeholder="Description of task"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
        />
        <select className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        <input
            type="date"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2">
                
        </input>
      <button className="w-full bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600 ">
        Add Task{ }
      </button>
    </div>
  );
}
export default AddTask;
