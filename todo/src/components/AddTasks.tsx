import type { AddTasks } from "../types/types";

export default function AddTasks({ value, setValue, handleAdd }: AddTasks) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
