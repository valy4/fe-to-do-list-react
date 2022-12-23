const TasksSection = (props) => {
  const handleDeleteTask = (taskId) => {
    const tasks = props.listToDos.filter((task) => task.id !== taskId);
    return props.setListToDos(tasks);
  };
  return (
    <div>
      <h2> {props.listToDos.length} tasks</h2>
      <ol>
        {props.listToDos.map((todo) => {
          return (
            <div>
              <li key={todo.id}>{todo.text} </li>
              <button
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
