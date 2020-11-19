const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const db = {};

const DataTypes = Sequelize.DataTypes;
const sequelize = new Sequelize(process.env.DB_CONNECTION);

const currentFile = path.basename(__filename);

const modelsPath = fs.readdirSync(__dirname).filter((file) => {
  const returnFile =
    file.indexOf(".") !== 0 && file !== currentFile && file.slice(-3) === ".js";
  return returnFile;
});

modelsPath.forEach((modelPath) => {
  const location = String(modelPath);
  let filePath = String(path.join(__dirname, location));
  const model = require(filePath)(sequelize, DataTypes);
});

const models = sequelize.models;
Object.keys(models).forEach((model) => {
  db[model] = models[model];
  if (models[model].associate) models[model].associate(models);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
