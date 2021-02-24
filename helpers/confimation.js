const inquirer = require("inquirer");

const confirmation = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message: message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = confirmation;
