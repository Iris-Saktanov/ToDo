export type Tasks = {
  id: string;
  text: string;
  complete: boolean;
  edit: boolean;
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
  handleEdit: (id: Tasks["id"]) => void;
  edit: string;
  setEdit: (prop: TasksList["edit"]) => void;
  handleAddChanges: (id: Tasks["id"]) => void;
};

export type Task = {
  task: Tasks;
  handleChecked: TasksList["handleChecked"];
  handleDelete: TasksList["handleDelete"];
  handleEdit: TasksList["handleEdit"];
  edit: string;
  setEdit: (prop: string) => void;
  handleAddChanges: TasksList["handleAddChanges"];
};
