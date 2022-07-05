const executeQuery = require("./query");
const moment = require("moment")();
const bycrypt = require("bcryptjs");

const tableName = "userController ";
const modifiedOn = moment.format("YYYY-MM-DD HH:mm:ss");

class User {
  constructor(info) {
    this.firstName = info.firstName;
    this.lastName = info.lastName;
    this.empId = info.empId;
    const hashedPassword = bycrypt.hashSync(info.password, 8);
    this.password = hashedPassword;
    this.emailId = info.emailId;
    this.createdOn = moment.format("YYYY-MM-DD HH:mm:ss");
    this.modifiedOn = modifiedOn;
    this.roleId = info.roleId;
  }
  static getAll(result) {
    const baseQuery = "Select *, null as 'password' from " + tableName;
    executeQuery.select(baseQuery, "", "", result);
  }
  static createNew(newUser, result) {
    const baseQuery = "Insert into " + tableName + "set ? ";
    executeQuery.create(baseQuery, newUser, result);
  }
  static updateById(empId, newUser, result) {
    const baseQuery =
      "Update " + tableName + " set ? , modifiedOn = '" + modifiedOn + "' ";
    const whereClause = "where empId = ? ";
    executeQuery.update(baseQuery, whereClause, empId, newUser, result);
  }
  static deleteById(empId, result) {
    const baseQuery = "Delete from " + tableName;
    const whereClause = "where empId = ? ";
    executeQuery.delete(baseQuery, whereClause, empId, result);
  }
  static getById(empId, result) {
    const baseQuery = "Select *, null as 'password' from " + tableName;
    const whereClause = "where empId = ? ";
    executeQuery.select(baseQuery, whereClause, empId, result);
  }

  static userLogin(emailId, result) {
    const baseQuery = "Select * from " + tableName;
    const whereClause = "where emailId = ? ";
    executeQuery.select(baseQuery, whereClause, emailId, result);
  }
}

module.exports = User;
