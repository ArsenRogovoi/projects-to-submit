import { generateId } from "../utils/algoMethods.js";
export class Task {
    id;
    description;
    status;
    constructor(task, allTasksArr = []) {
        const { description, status = 0 } = task;
        this.id = generateId(allTasksArr);
        this.description = description;
        this.status = status;
    }
    edit(description) {
        this.description = description;
    }
}
