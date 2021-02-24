const inquirer = require("inquirer");
require("colors");

const listDeleteTask = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}.`.green;

    return {
      value: task.id,
      name: `${index} ${task.description}`,
    };
  });

  choices.push({
    value: "0",
    name: "0. ".green + "Salir",
  });

  const question = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices: choices,
    },
  ];

  const { id } = await inquirer.prompt(question);
  return id;
};

module.exports = listDeleteTask;
