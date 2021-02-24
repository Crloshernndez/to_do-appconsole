const inquirer = require("inquirer");
require("colors");

const options = [
  {
    value: "1",
    name: `${"1".green}. Crear tarea`,
  },
  {
    value: "2",
    name: `${"2".green}. Listar tareas`,
  },
  {
    value: "3",
    name: `${"3".green}. Listar tareas completadas`,
  },
  {
    value: "4",
    name: `${"4".green}. Listar tareas pendientes`,
  },
  {
    value: "5",
    name: `${"5".green}. Completar tarea(s)`,
  },
  {
    value: "6",
    name: `${"6".green}. Borrar tarea`,
  },
  {
    value: "7",
    name: `${"7".green}. salir`,
  },
];

const question = [
  {
    type: "list",
    name: "listOfOptions",
    message: "Que desea hacer?",
    choices: options,
  },
];

const menu = async () => {
  console.clear();

  console.log("=======================".green);
  console.log(" Seleccione una opcion".white);
  console.log("=======================\n".green);

  const { listOfOptions } = await inquirer.prompt(question);
  return listOfOptions;
};

module.exports = menu;
