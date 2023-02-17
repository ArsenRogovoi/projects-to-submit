import { Task } from "../models/taskModel.js";

export const CreateTaskElement = (task: Task) => {
  const taskContainer = document.createElement("div");
  taskContainer.id = `task-${task.id}`;
  taskContainer.classList.add(
    "container",
    "my-2",
    "border",
    "border-1",
    "border-secondary",
    "rounded"
  );

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("row", "d-flex", "justify-content-end");

  const editBtn = document.createElement("div");
  editBtn.classList.add(
    "col-2",
    "p-0",
    "btn",
    "border",
    "border-dark",
    "border-1",
    "rounded",
    "m-1",
    "text-center",
    "bg-warning"
  );
  const editBtnIcon = document.createElement("i");
  editBtnIcon.classList.add("bi", "bi-pencil");
  editBtnIcon.style.color = "black";
  editBtn.appendChild(editBtnIcon);

  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add(
    "col-2",
    "p-0",
    "btn",
    "border",
    "border-dark",
    "border-1",
    "rounded",
    "m-1",
    "text-center",
    "bg-danger"
  );
  const deleteBtnIcon = document.createElement("i");
  deleteBtnIcon.classList.add("bi", "bi-trash3");
  deleteBtnIcon.style.color = "black";
  deleteBtn.appendChild(deleteBtnIcon);

  const doneBtn = document.createElement("div");
  doneBtn.classList.add(
    "col-2",
    "p-0",
    "btn",
    "border",
    "border-dark",
    "border-1",
    "rounded",
    "m-1",
    "text-center",
    "bg-success"
  );
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

  return taskContainer;
};
