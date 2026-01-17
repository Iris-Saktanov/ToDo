import type { Task } from "../types/types";
import "./task.css";

export default function Task({
  task,
  handleChecked,
  handleDelete,
  handleEdit,
  edit,
  setEdit,
  handleAddChanges,
}: Task) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.complete}
          onChange={() => handleChecked(task.id)}
        />
        {task.text}
      </label>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
      <button
        onClick={() => handleEdit(task.id)}
        className={task.edit ? "inputHiden" : "inputBlock"}
      >
        Change
      </button>
      <label className={task.edit ? "inputBlock" : "inputHiden"}>
        <input
          type="text"
          placeholder="Write here"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
        <button onClick={() => handleAddChanges(task.id)}>Add changes</button>
      </label>
    </li>
  );
}
