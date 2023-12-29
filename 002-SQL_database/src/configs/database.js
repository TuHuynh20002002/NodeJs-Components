const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "test_db",
  // database: process.env.DB_NAME,
  password: "admin",
  // password: process.env.DB_PASSWORD,
});

module.exports = pool.promise();
