const mysql = require("mysql");
const Promise = require("bluebird");
const config = require("./db_config");
const log = require("../logs/logger");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      log.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      log.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      log.error("Database connection was refused.");
    }
  }
  if (connection) {
    log.info("Connected to apis DB!");
    connection.release();
  } else {
    log.info("Can't able to connected to apis DB!");
  }
  return;
});

module.exports = pool;
