import type { TasksList } from "../types/types";
import Task from "./Task";

export default function Tasks({
  tasks,
  handleChecked,
  handleDelete,
  handleEdit,
  edit,
  setEdit,
  handleAddChanges,
}: TasksList) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          edit={edit}
          setEdit={setEdit}
          handleAddChanges={handleAddChanges}
        />
      ))}
    </ul>
  );
}
