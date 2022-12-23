const TasksSection = (props) => {
  const handleDeleteTask = (taskId) => {
    const tasks = props.listToDos.filter((task) => task.id !== taskId);
    return props.setListToDos(tasks);
  };
  return (
    <div>
      <h2 style={{color:"#ffd60a"}}> {props.listToDos.length} tasks</h2>
      <ol>
        {props.listToDos.map((todo) => {
          return (
            <div className="task-place">
              <li style={{color:"#ffd60a", fontSize:"30px", width:"30%"}} key={todo.id}>{todo.text} </li>
              <button className="btn-2"
                onClick={() => {
                  handleDeleteTask(todo.id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
};
export default TasksSection;
