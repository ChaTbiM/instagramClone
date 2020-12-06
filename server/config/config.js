const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `.env.${env}` });

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dialect = process.env.DB_DIALECT;

const CONFIG_KEYS = { username, password, database, host, port, dialect };

module.exports = {
  development: {
    ...CONFIG_KEYS,
  },
  test: {
    ...CONFIG_KEYS,
  },
  production: {
    ...CONFIG_KEYS,
  },
};
