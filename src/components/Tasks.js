import Task from "./Task";
const Tasks = ({ tasks, onDelete,onToggle }) => {
  return (
    <>
      {tasks.map((mapfTask) => (
        <Task key={mapfTask.id} task={mapfTask} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
};

export default Tasks;
