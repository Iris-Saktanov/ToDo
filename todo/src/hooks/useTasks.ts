import { useEffect, useState } from "react";
import type { Tasks } from "../types/types";

const STORAGE_KEY = "tasks";

export default function useTasks() {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>(() => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd() {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: value,
        complete: false,
        edit: false,
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

  function handleEdit(id: Tasks["id"]) {
    setTasks((prev) =>
      prev.map((el) => (el.id === id ? { ...el, edit: !el.edit } : el))
    );
  }

  function handleAddChanges(id: Tasks["id"]) {
    setTasks((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, text: edit, edit: !el.edit } : el
      )
    );
    setEdit("");
  }

  return {
    value,
    setValue,
    handleAdd,
    tasks,
    handleChecked,
    handleDelete,
    handleEdit,
    edit,
    setEdit,
    handleAddChanges,
  };
}
