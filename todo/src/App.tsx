import { useState } from "react";
import "./App.css";
import type { Tasks } from "./types/types";
import AddTasks from "./components/AddTasks";
import TasksList from "./components/TasksList";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function handleAdd() {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: value,
        complete: false,
      },
    ]);
    setValue("");
  }

  function handleChecked(id: Tasks["id"]) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  }

  function handleDelete(id: Tasks["id"]) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  return (
    <>
      <AddTasks value={value} setValue={setValue} handleAdd={handleAdd} />
      <TasksList
        tasks={tasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </>
  );
}
