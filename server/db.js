require('dotenv').config();

const postgresPassword = process.env.POSTGRES_PASSWORD;
const postgresPort = process.env.POSTGRES_PORT;

const Pool = require("pg").Pool; 

const pool = new Pool({
  user: "postgres",
  password: `${postgresPassword}`,
  host: "localhost",
  port: `${postgresPort}`,
  database: "perntodo"
})

module.exports = pool;