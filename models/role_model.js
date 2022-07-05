const executeQuery = require("./query");
const moment = require("moment")();

const tableName = "roleController ";
const modifiedOn = moment.format("YYYY-MM-DD HH:mm:ss");

class Role {
  constructor(info) {
    this.createdOn = moment.format("YYYY-MM-DD HH:mm:ss");
    this.modifiedOn = modifiedOn;
    this.role = info.role;
  }
  static getAll(result) {
    const baseQuery = "Select * from " + tableName;
    executeQuery.select(baseQuery, "", "", result);
  }
  static createNew(newRole, result) {
    const baseQuery = "Insert into " + tableName + "set ? ";
    executeQuery.create(baseQuery, newRole, result);
  }
  static updateById(id, newRole, result) {
    const baseQuery =
      "Update " + tableName + " set ? , modifiedOn = '" + modifiedOn + "' ";
    const whereClause = "where id = ? ";
    executeQuery.update(baseQuery, whereClause, id, newRole, result);
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

module.exports = Role;
