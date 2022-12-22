import Task from "./Task";
const TaskSection = (props) => {
  return (
    <div>
      <ol>
        {props.listToDoes.map((todo) => {
          return <Task todo={todo} />;
        })}
      </ol>
    </div>
  );
};
export default TaskSection;
