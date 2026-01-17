import "./App.css";
import AddTasks from "./components/AddTasks";
import TasksList from "./components/TasksList";
import useTasks from "./hooks/useTasks";

export default function App() {
  const {
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
  } = useTasks();
  return (
    <>
      <AddTasks value={value} setValue={setValue} handleAdd={handleAdd} />
      <TasksList
        tasks={tasks}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        edit={edit}
        setEdit={setEdit}
        handleAddChanges={handleAddChanges}
      />
    </>
  );
}
