import type { Task } from "../types/types";

export default function Task({ task, handleChecked, handleDelete }: Task) {
  return (
    <>
      <li key={task.id}>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={task.complete}
            onChange={() => handleChecked(task.id)}
          />
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </label>
      </li>
    </>
  );
}
