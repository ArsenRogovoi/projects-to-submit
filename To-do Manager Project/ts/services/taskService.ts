import { taskManager } from "../app.js";
import { CreateTaskElement } from "../components/taskComponent.js";
import { Task } from "../models/taskModel.js";
import {
  NEW_TASK_INPUT,
  NEW_TASK_INPUT_TEXT_AREA,
  NO_TASKS_NOTIFICATION,
  TASKS_CONTAIENER,
} from "./domService.js";

export const addNewTask = () => {
  NEW_TASK_INPUT.classList.remove("d-none");
  NEW_TASK_INPUT.classList.add("d-block");
};

export const cancelAddingNewTask = () => {
  NEW_TASK_INPUT_TEXT_AREA.value = "";
  NEW_TASK_INPUT.classList.remove("d-block");
  NEW_TASK_INPUT.classList.add("d-none");
};

export const createNewTask = (description: string) => {
  NO_TASKS_NOTIFICATION.classList.remove("d-block");
  NO_TASKS_NOTIFICATION.classList.add("d-none");
  const newTask = new Task({ description }, taskManager.tasks);
  taskManager.add(newTask);
  localStorage.setItem("ArsenTasks", JSON.stringify(taskManager.tasks));

  cancelAddingNewTask();

  showTask(newTask);
};

const showTask = (task: Task) => {
  TASKS_CONTAIENER.appendChild(CreateTaskElement(task));
};

export const showExistingTasks = (existingTasks: Task[]) => {
  NO_TASKS_NOTIFICATION.classList.remove("d-block");
  NO_TASKS_NOTIFICATION.classList.add("d-none");
  existingTasks.forEach((task) => {
    showTask(task);
  });
};

export const deleteTask = (taskId: number, taskContainer: HTMLDivElement) => {
  taskManager.delete(taskId);
  TASKS_CONTAIENER.removeChild(taskContainer);
  if (taskManager.tasks.length === 0) {
    NO_TASKS_NOTIFICATION.classList.remove("d-none");
    NO_TASKS_NOTIFICATION.classList.add("d-block");
  }
};

export const doneTask = (
  taskContainer: HTMLDivElement,
  task: Task,
  btnContainer: HTMLDivElement,
  doneBtn: HTMLDivElement
) => {
  taskContainer.classList.add("bg-success");
  btnContainer.removeChild(doneBtn);
  taskManager.tasks.forEach((taskOfManager) => {
    if (taskOfManager.id === task.id) {
      taskOfManager.status = 1;
    }
  });
  localStorage.setItem("ArsenTasks", JSON.stringify(taskManager.tasks));
};

export const editTask = (
  task: Task,
  taskContainer: HTMLDivElement,
  descriptionContainer: HTMLDivElement,
  description: HTMLParagraphElement,
  btnContainer: HTMLDivElement,
  doneBtn: HTMLDivElement
) => {
  const textArea = document.createElement("textarea");
  textArea.id = "edit-textarea";
  textArea.classList.add("w-100", "bg-warning", "text-dark");
  textArea.innerText = `${task.description} <-- Edit`;

  const editSubmitBtn = document.createElement("input");
  editSubmitBtn.type = "button";
  editSubmitBtn.value = "Edit";
  editSubmitBtn.classList.add(
    "btn",
    "btn-outline-primary",
    "w-100",
    "mb-1",
    "text-light",
    "rounded-0",
    "rounded-bottom-1"
  );

  taskContainer.removeChild(descriptionContainer);
  taskContainer.appendChild(textArea);
  taskContainer.appendChild(editSubmitBtn);

  editSubmitBtn.addEventListener("click", () => {
    description.innerText = textArea.value;
    taskContainer.removeChild(textArea);
    taskContainer.removeChild(editSubmitBtn);
    taskContainer.appendChild(descriptionContainer);
    taskContainer.classList.remove("bg-success");
    btnContainer.appendChild(doneBtn);

    taskManager.tasks.forEach((elem) => {
      if (elem.id === task.id) {
        elem.description = description.innerText;
        elem.status = 0;
      }
      localStorage.setItem("ArsenTasks", JSON.stringify(taskManager.tasks));
    });
  });
};
