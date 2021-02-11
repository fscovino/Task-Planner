
/*
* TASK CLASS
*/
export class Task {

    // constructor
    constructor(num){
        this._id = num;
        this._title = '';
        this._description = '';
        this._assignedTo = '';
        this._dueDate = '';
        this._status = 'PENDING';   //'PENDING', 'DONE' or 'OVERDUE'
    }

    get id() {
        return this._id;
    }

    set id(num) {
        this._id = num;
    }

    get title() {
        return this._title;
    }

    set title(str) {
        this._title = str;
    }

    get description() {
        return this._description;
    }

    set description(str) {
        this._description = str;
    }

    get assignedTo() {
        return this._assignedTo;
    }

    set assignedTo(str) {
        this._assignedTo = str;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(date) {
        this._dueDate = date;
    }

    get status() {
        return this._status;
    }

    set status(str) {
        this._status = str;
    }
}


/*
* TASK-MANAGER CLASS
*/
export class TaskManager {

    // constructor
    constructor() {
        this._taskList = [];
        this._taskCounter = 0;
    }

    createTask() {
        const id = ++this._taskCounter;
        const task = new Task(id);
        this._taskList.push(task);
        return task;
    }

    getTask(id) {
        const t = this._taskList.find(task => task.id === id);
        return t;
    }

    getAllTaks() {
        return this._taskList;
    }

    updateTask(task) {

        // pending code
        this.saveTaskList();
    }

    completeTask(id) {
        this._taskList.forEach(function(task) {
            if (task._id === id) {
                task._status = 'DONE';
            }
        });
        this.saveTaskList();
    }

    deleteTask(id) {
        const index = this._taskList.findIndex(task => task._id === id);
        this._taskList.splice(index, 1);
        this.saveTaskList();
    }

    saveTaskList() {
        localStorage.setItem('tasks', JSON.stringify(this._taskList));
        localStorage.setItem('taskId', JSON.stringify(this._taskCounter));
    }

    loadTaskList() {
        // Retrieve list of tasks array
        const tasks = localStorage.getItem('tasks');
        if (tasks !== null) {
            this._taskList = JSON.parse(tasks)
        }

        // Retrieve task last id assigned
        const id = localStorage.getItem('taskId');
        if (id !== null) {
            this._taskCounter = JSON.parse(id);
        }
    }
}