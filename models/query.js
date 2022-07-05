const pool = require("../db/db_connection");
const log = require("../logs/logger");

class Query {
  constructor() {
    this.client = pool;
  }

  async select(query, whereClause, whereValues, result) {
    await this.client.query(
      `${query}${whereClause}`,
      whereValues,
      (err, res) => {
        if (err) {
          log.error(err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }

  async create(query, newData, result) {
    await this.client.query(`${query}`, newData, (err, res) => {
      if (err) {
        log.error(err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  }

  async update(query, whereClause, whereValues, newData, result) {
    await this.client.query(
      `${query}${whereClause}`,
      [newData, whereValues],
      (err, res) => {
        if (err) {
          log.error(err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }

  async delete(query, whereClause, whereValues, result) {
    console.log(whereValues);
    await this.client.query(
      `${query}${whereClause}`,
      whereValues,
      (err, res) => {
        if (err) {
          log.error(err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }
}

module.exports = new Query();
