const executeQuery = require("./query");
const moment = require("moment")();

const tableName = "configController ";
const modifiedOn = moment.format("YYYY-MM-DD HH:mm:ss");

class Config {
  constructor(info) {
    this.createdOn = moment.format("YYYY-MM-DD HH:mm:ss");
    this.modifiedOn = modifiedOn;
    this.appVersion = info.appVersion;
    this.reactVersion = info.reactVersion;
    this.versionCode = info.versionCode;
    this.reactBundlePath = info.reactBundlePath;
  }
  static getAll(result) {
    const baseQuery = "Select * from " + tableName;
    executeQuery.select(baseQuery, "", "", result);
  }
  static createNew(newConfig, result) {
    const baseQuery = "Insert into " + tableName + "set ? ";
    executeQuery.create(baseQuery, newConfig, result);
  }
  static updateById(id, newConfig, result) {
    const baseQuery =
      "Update " + tableName + " set ? , modifiedOn = '" + modifiedOn + "' ";
    const whereClause = "where id = ? ";
    executeQuery.update(baseQuery, whereClause, id, newConfig, result);
  }
  static deleteById(id, result) {
    const baseQuery = "Delete from " + tableName;
    const whereClause = "where id = ? ";
    executeQuery.delete(baseQuery, whereClause, id, result);
  }
  static getById(id, result) {
    const baseQuery = "Select * from " + tableName;
    const whereClause = "where id = ? ";
    executeQuery.select(baseQuery, whereClause, id, result);
  }
}

module.exports = Config;
