const inquirer = require("inquirer");
require("colors");

const showCheckList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const index = `${i + 1}`.green;

    return {
      value: task.id,
      name: `${index} ${task.description}`,
      checked: task.complete ? true : false,
    };
  });

  const question = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices: choices,
    },
  ];

  const { ids } = await inquirer.prompt(question);
  return ids;
};

module.exports = showCheckList;
