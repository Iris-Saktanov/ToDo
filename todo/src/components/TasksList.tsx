import type { TasksList } from "../types/types";
import Task from "./Task";

export default function Tasks({
  tasks,
  handleChecked,
  handleDelete,
}: TasksList) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task
            task={task}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
}
