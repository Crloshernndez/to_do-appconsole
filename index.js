const { mainMenu, pausa } = require("./helpers");
console.clear();

const main = async () => {
  let option = "";

  do {
    option = await mainMenu();
    switch (option) {
      case "1":
        console.log("caso 1");

        break;
      case "2":
        console.log("caso2");

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
    await pausa();
  } while (option !== "7");
};

main();
