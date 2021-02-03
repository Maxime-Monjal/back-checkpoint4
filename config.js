const mysql = require("mysql");
require("dotenv").config();

let connection;

function getConnection() {
  if (!connection) {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
  }
  if (connection && connection.state === "disconnected") {
    connection.connect(function (err) {
      if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
      }

      console.log(`connected as id ${connection.threadId}`);
    });
  }

  return connection;
}

module.exports = getConnection();
