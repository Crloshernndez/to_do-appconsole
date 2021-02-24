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

  // metodo para listar las tareas completadas y las pendientes
  listCompletePendingTask(completed) {
    console.log();
    this.arrayList.filter((task) => {
      let count = 0;
      const { description, complete } = task;
      const status = complete ? "completed".green : "pending".red;
      if (completed) {
        if (complete) {
          count += 1;
          console.log(
            `${(count + ".").green} ${description} :: ${complete.green} `
          );
        }
      } else {
        if (!complete) {
          count += 1;
          console.log(`${(count + ".").green} ${description} :: ${status}`);
        }
      }
    });
  }

  //metodo para manejar el estado de las tareas
  toggleStatus(ids = []) {
    ids.forEach((id) => {
      const task = this._taskList[id];
      if (!task.complete) {
        task.complete = new Date().toISOString();
      }
    });

    this.arrayList.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._taskList[task.id].complete = null;
      }
    });
  }

  // metodo para eliminar tarea
  deleteTask(id) {
    if (this._taskList[id]) {
      delete this._taskList[id];
    }
  }
}

module.exports = Tasks;
