const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const db = {};

// init database connection
const DB_CONNECTION = `${process.env.DB_DIALECT}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`;
const sequelize = new Sequelize(DB_CONNECTION);

// get all models paths
const currentFile = path.basename(__filename);
const modelsPath = fs.readdirSync(__dirname).filter((file) => {
  const returnFile =
    file.indexOf(".") !== 0 && file !== currentFile && file.slice(-3) === ".js";
  return returnFile;
});

//init models  -- loading models to seqeulize
modelsPath.forEach((modelPath) => {
  const location = String(modelPath);
  let filePath = String(path.join(__dirname, location));
  const model = require(filePath)(sequelize, DataTypes);
});

// models associations
const models = sequelize.models;
Object.keys(models).forEach((model) => {
  db[model] = models[model];
  if (models[model].associate) models[model].associate(models);
});

// needed variables
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = sequelize.models;

module.exports = db;
