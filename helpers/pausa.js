const inquirer = require("inquirer");
require("colors");

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "confirmation",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];

  console.log("\n");

  const confirm = await inquirer.prompt(question);
  return confirm;
};

module.exports = pausa;
