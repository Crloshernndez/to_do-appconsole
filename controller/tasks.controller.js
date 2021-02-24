const { TaskModel } = require("../models");
require("colors");

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

  // metodo para obtener data desde la hoja db
  getDataFromStore(tasksDb) {
    tasksDb.forEach((task) => {
      this._taskList[task.id] = task;
    });
  }

  //metodo crear tarea
  createTask(description = "") {
    const task = new TaskModel(description);
    this._taskList[task.id] = task;
  }

  //metodo para obtener lista de tareas
  getTaskList() {
    console.log();
    this.arrayList.filter((task, i) => {
      const index = `${i + 1}`.green;
      const { description, complete } = task;
      const status = complete ? "Completado".green : "Pendiente".red;
      console.log(`${index}. ${description} :: ${status}`);
    });
  }
}

module.exports = Tasks;
