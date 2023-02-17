import { Task } from "./taskModel.js";
export class TaskManager {
  tasks: Task[];
  constructor(tasks: Task[] = []) {
    this.tasks = tasks;
  }
  add = (newTask: Task) => {
    this.tasks.push(newTask);
  };
  delete = (id: number) => {
    let indToRemove = undefined;
    this.tasks.forEach((task, ind) => {
      if (task.id === id) indToRemove = ind;
    });
    if (typeof indToRemove === "number") this.tasks.splice(indToRemove, 1);
    localStorage.setItem("ArsenTasks", JSON.stringify(this.tasks));
  };
  changeAllTasks(tasks: Task[]) {
    this.tasks = tasks;
  }
}
