function AddTask() {
    return (
        <div>
            <h2>Add a new task</h2>
            <form>
                <input className="font-mono" type="text" placeholder="Task name" required />
                <input type="text" placeholder="Task description" required />
                <input type="test" placeholder="Task priority" required/>                <input type="date" required />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default AddTask