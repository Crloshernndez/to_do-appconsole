const { Tasks } = require("./controller");
const { read, save } = require("./db/store");
const {
  mainMenu,
  pausa,
  readInput,
  showCheckList,
  listDeleteTask,
  confirmation,
} = require("./helpers");

console.clear();

const main = async () => {
  let option = "";
  const tasks = new Tasks();

  const tasksFromDb = read();

  // condicional para cargar tareas
  if (tasksFromDb) {
    //entonces
    tasks.getDataFromStore(tasksFromDb);
  }

  do {
    //imprimir menu
    option = await mainMenu();
    switch (option) {
      //crear tarea
      case "1":
        const description = await readInput("Description:");
        tasks.createTask(description);
        break;

      //litar todas las tareas
      case "2":
        console.log(tasks.getTaskList());
        break;

      //listar tareas completadas
      case "3":
        console.log(tasks.listCompletePendingTask(true));
        break;

      // listar tareas pendientes
      case "4":
        console.log(tasks.listCompletePendingTask(false));
        break;

      // cambiar estado de tareas
      case "5":
        const ids = await showCheckList(tasks.arrayList);
        tasks.toggleStatus(ids);
        console.log("Estatus actualizado");
        break;

      //eliminar tareas
      case "6":
        const id = await listDeleteTask(tasks.arrayList);
        if (id !== "0") {
          const confirm = await confirmation("Confirmas eliminar tarea?");
          if (confirmation) {
            tasks.deleteTask(id);
            console.log("Tarea borrada");
          }
        }
        break;
    }

    save(tasks.arrayList);

    await pausa();
  } while (option !== "7");
};

main();
