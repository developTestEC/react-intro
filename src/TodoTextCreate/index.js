import './TodoTextCreate.css';
function TodoTextCreate({newTask, setNewTask}) {
    return (
        <input className='TodoTextCreate' 
        type="text"
        placeholder='add task' 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
    );
}
export { TodoTextCreate};  