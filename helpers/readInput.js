const inquirer = require("inquirer");

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message: message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingresa un valor";
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

module.exports = readInput;
