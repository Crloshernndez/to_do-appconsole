const {
  mainMenu,
  pausa,
  readInput,
  showCheckList,
  listDeleteTask,
  confirmation,
} = require("./helpers");
const { Tasks } = require("./controller");
const { read, save } = require("./db/store");

console.clear();

const main = async () => {
  let option = "";
  const tasks = new Tasks();

  const tasksFromDb = read();

  if (tasksFromDb) {
    tasks.getDataFromStore(tasksFromDb);
  }

  do {
    option = await mainMenu();
    switch (option) {
      case "1":
        const description = await readInput("Description:");
        tasks.createTask(description);

        break;
      case "2":
        console.log(tasks.getTaskList());

        break;
      case "3":
        console.log(tasks.listCompletePendingTask(true));

        break;
      case "4":
        console.log(tasks.listCompletePendingTask(false));

        break;
      case "5":
        const ids = await showCheckList(tasks.arrayList);
        tasks.toggleStatus(ids);
        console.log("Estatus actualizado");

        break;
      case "6":
        const id = await listDeleteTask(tasks.arrayList);
        if (id !== "0") {
          const confirm = await confirmation("Confirmas eliminar tarea?");
          if (confirm) {
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
