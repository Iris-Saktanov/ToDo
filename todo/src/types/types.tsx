export type Tasks = {
  id: string;
  text: string;
  complete: boolean;
};

export type AddTasks = {
  value: string;
  setValue: (value: string) => void;
  handleAdd: () => void;
};

export type TasksList = {
  tasks: Tasks[];
  handleChecked: (id: Tasks["id"]) => void;
  handleDelete: (id: Tasks["id"]) => void;
};

export type Task = {
  task: Tasks;
  handleChecked: TasksList["handleChecked"];
  handleDelete: TasksList["handleDelete"];
};
