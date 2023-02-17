import { task, taskStatus } from "../types";
import { generateId } from "../utils/algoMethods.js";

export class Task {
  id: number;
  description: string;
  status: taskStatus;

  constructor(task: task, allTasksArr: Task[] = []) {
    const { description, status = 0 } = task;
    this.id = generateId(allTasksArr);
    this.description = description;
    this.status = status;
  }
  edit(description: string) {
    this.description = description;
  }
}
