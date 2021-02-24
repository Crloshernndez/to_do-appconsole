const fs = require("fs");

const file = "./data.json";

// funcion para guardar data
const save = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

// funcion para leer la data
const read = () => {
  if (!file) {
    //entonces
    return null;
  }

  const info = fs.readFileSync(file, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
};

module.exports = {
  save,
  read,
};
