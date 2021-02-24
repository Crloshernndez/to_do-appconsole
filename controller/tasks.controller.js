const { TaskModel } = require("../models");

class Tasks {
  //objeto lista de tareas
  _taskList = {};

  // creamos getter para trabajar como array el objeto lista de tareas
  get arrayList() {
    const list = [];
    Object.keys(this._taskList).forEach((key) => {
      const task = this._taskList[key];
      list.push(task);
    });
    return list;
  }

  constructor() {
    this._taskList = {};
  }

  //metodo crear tarea
  createTask(description = "") {
    const task = new TaskModel(description);
    this._taskList[task.id] = task;
  }
}

module.exports = Tasks;
