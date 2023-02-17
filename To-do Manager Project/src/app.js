import { TaskManager } from "./models/taskManagerModel.js";
import { ADD_TASK_BTN, NEW_TASK_CANCEL_BTN, NEW_TASK_INPUT_TEXT_AREA, NEW_TASK_SUBMIT_BTN, } from "./services/domService.js";
import { addNewTask, cancelAddingNewTask, createNewTask, showExistingTasks, } from "./services/taskService.js";
export const taskManager = new TaskManager();
const tasksJSON = localStorage.getItem("ArsenTasks");
const tasks = typeof tasksJSON === "string" ? JSON.parse(tasksJSON) : undefined;
if (tasks && tasks.length) {
    taskManager.changeAllTasks(tasks);
    showExistingTasks(tasks);
}
else {
    localStorage.setItem("ArsenTasks", JSON.stringify([]));
}
ADD_TASK_BTN.addEventListener("click", addNewTask);
NEW_TASK_CANCEL_BTN.addEventListener("click", cancelAddingNewTask);
NEW_TASK_SUBMIT_BTN.addEventListener("click", () => {
    createNewTask(NEW_TASK_INPUT_TEXT_AREA.value);
});
