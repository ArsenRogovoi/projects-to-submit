import { taskManager } from "../app.js";
import { CreateTaskElement } from "../components/taskComponent.js";
import { Task } from "../models/taskModel.js";
import { NEW_TASK_INPUT, NEW_TASK_INPUT_TEXT_AREA, NO_TASKS_NOTIFICATION, TASKS_CONTAIENER, } from "./domService.js";
export const addNewTask = () => {
    NEW_TASK_INPUT.classList.remove("d-none");
    NEW_TASK_INPUT.classList.add("d-block");
};
export const cancelAddingNewTask = () => {
    NEW_TASK_INPUT_TEXT_AREA.value = "";
    NEW_TASK_INPUT.classList.remove("d-block");
    NEW_TASK_INPUT.classList.add("d-none");
};
export const createNewTask = (description) => {
    NO_TASKS_NOTIFICATION.classList.remove("d-block");
    NO_TASKS_NOTIFICATION.classList.add("d-none");
    const newTask = new Task({ description }, taskManager.tasks);
    taskManager.add(newTask);
    localStorage.setItem("ArsenTasks", JSON.stringify(taskManager.tasks));
    cancelAddingNewTask();
    showTask(newTask);
};
const showTask = (task) => {
    TASKS_CONTAIENER.appendChild(CreateTaskElement(task));
};
export const showExistingTasks = (existingTasks) => {
    NO_TASKS_NOTIFICATION.classList.remove("d-block");
    NO_TASKS_NOTIFICATION.classList.add("d-none");
    existingTasks.forEach((task) => {
        showTask(task);
    });
};
