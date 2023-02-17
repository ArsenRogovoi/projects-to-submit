import { taskManager } from "../app.js";
import { NO_TASKS_NOTIFICATION, TASKS_CONTAIENER, } from "../services/domService.js";
export const CreateTaskElement = (task) => {
    const taskContainer = document.createElement("div");
    taskContainer.id = `task-${task.id}`;
    taskContainer.classList.add("container", "my-2", "border", "border-1", "border-secondary", "rounded");
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("row", "m-0", "p-0", "d-flex", "justify-content-end");
    const editBtn = document.createElement("div");
    editBtn.classList.add("col-2", "p-0", "btn", "border", "border-dark", "border-1", "rounded", "ms-1", "my-1", "text-center", "bg-warning");
    const editBtnIcon = document.createElement("i");
    editBtnIcon.classList.add("bi", "bi-pencil");
    editBtnIcon.style.color = "black";
    editBtn.appendChild(editBtnIcon);
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("col-2", "p-0", "btn", "border", "border-dark", "border-1", "rounded", "ms-1", "my-1", "text-center", "bg-danger");
    const deleteBtnIcon = document.createElement("i");
    deleteBtnIcon.classList.add("bi", "bi-trash3");
    deleteBtnIcon.style.color = "black";
    deleteBtn.appendChild(deleteBtnIcon);
    const doneBtn = document.createElement("div");
    doneBtn.classList.add("col-2", "p-0", "btn", "border", "border-dark", "border-1", "rounded", "ms-1", "my-1", "text-center", "bg-success");
    const doneBtnIcon = document.createElement("i");
    doneBtnIcon.classList.add("bi", "bi-check2");
    doneBtnIcon.style.color = "white";
    doneBtn.appendChild(doneBtnIcon);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);
    btnContainer.appendChild(doneBtn);
    taskContainer.appendChild(btnContainer);
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("row");
    const description = document.createElement("p");
    description.innerText = `${task.description}`;
    descriptionContainer.appendChild(description);
    taskContainer.appendChild(descriptionContainer);
    editBtn.addEventListener("click", () => {
        const textArea = document.createElement("textarea");
        textArea.id = "edit-textarea";
        textArea.classList.add("w-100", "bg-warning", "text-dark");
        textArea.innerText = `${task.description} <-- Edit`;
        const editSubmitBtn = document.createElement("input");
        editSubmitBtn.type = "button";
        editSubmitBtn.value = "Edit";
        editSubmitBtn.classList.add("btn", "btn-outline-primary", "w-100", "mb-1", "text-light", "rounded-0", "rounded-bottom-1");
        taskContainer.removeChild(descriptionContainer);
        taskContainer.appendChild(textArea);
        taskContainer.appendChild(editSubmitBtn);
        editSubmitBtn.addEventListener("click", () => {
            description.innerText = textArea.value;
            taskContainer.removeChild(textArea);
            taskContainer.removeChild(editSubmitBtn);
            taskContainer.appendChild(descriptionContainer);
            taskManager.tasks.forEach((elem) => {
                if (elem.id === task.id) {
                    elem.description = description.innerText;
                }
                localStorage.setItem("ArsenTasks", JSON.stringify(taskManager.tasks));
            });
        });
    });
    deleteBtn.addEventListener("click", () => {
        taskManager.delete(task.id);
        TASKS_CONTAIENER.removeChild(taskContainer);
        if (taskManager.tasks.length === 0) {
            NO_TASKS_NOTIFICATION.classList.remove("d-none");
            NO_TASKS_NOTIFICATION.classList.add("d-block");
        }
    });
    doneBtn.addEventListener("click", () => {
        taskContainer.classList.add("bg-success");
        taskManager.tasks.forEach((taskOfManager) => {
            if (taskOfManager.id === task.id) {
                taskOfManager.status = 1;
            }
        });
        localStorage.setItem("ArsenTasks", JSON.stringify(taskManager.tasks));
    });
    return taskContainer;
};
