export var taskStatus;
(function (taskStatus) {
    taskStatus[taskStatus["Uncompleted"] = 0] = "Uncompleted";
    taskStatus[taskStatus["Completed"] = 1] = "Completed";
})(taskStatus || (taskStatus = {}));
