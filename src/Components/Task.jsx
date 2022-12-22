const Task = (props) => {
    const handleDeleteButton = () => {

    }
  return (
    <div>
      <li>{props.todo}</li>
      <input type="checkbox" />
      <button onClick={handleDeleteButton}>delete</button>
    </div>
  );
};
export default Task;
