export class TaskManager {
    tasks;
    constructor(tasks = []) {
        this.tasks = tasks;
    }
    add = (newTask) => {
        this.tasks.push(newTask);
    };
    delete = (id) => {
        let indToRemove = undefined;
        this.tasks.forEach((task, ind) => {
            if (task.id === id)
                indToRemove = ind;
        });
        if (typeof indToRemove === "number")
            this.tasks.splice(indToRemove, 1);
        localStorage.setItem("ArsenTasks", JSON.stringify(this.tasks));
    };
    changeAllTasks(tasks) {
        this.tasks = tasks;
    }
}
