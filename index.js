const { mainMenu, pausa, readInput } = require("./helpers");
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
        console.log("caso 3");

        break;
      case "4":
        console.log("caso 4");

        break;
      case "5":
        console.log("caso 5");

        break;
      case "6":
        console.log("caso 6");

        break;
    }

    save(tasks.arrayList);

    await pausa();
  } while (option !== "7");
};

main();
