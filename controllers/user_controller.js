const Jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user_model");
const httpLog = require("../util/http_logs");
const httpCode = require("../util/http_status_codes");
const authConfig = require("../auth/auth_config");

exports.authorization = (req, res) => {
  const token = Jwt.sign(authConfig.key, authConfig.secret);
  res.status(200).send({
    message: httpCode[200].message,
    token: token,
  });
  res.end();
  httpLog(req, res);
};

exports.getAllUser = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: httpCode[500].message,
        response: err,
      });
      res.end();
    } else if (data.length === 0) {
      res.status(404).status(404).send({
        status: 404,
        message: httpCode[404].message,
        description: httpCode[404].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        users: data,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  User.createNew(newUser, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: httpCode[500].message,
        response: err,
        description: httpCode[500].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        response: `User ${req.body.emailId} created successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.updateUserByEmpId = (req, res) => {
  User.updateById(req.params.empId, req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: httpCode[500].message,
        error: err,
        description: httpCode[500].description,
      });
      res.end();
    } else if (data.affectedRows === 0) {
      res.status(404).status(404).send({
        status: 404,
        empId: req.params.empId,
        message: httpCode[404].message,
        description: httpCode[404].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        response: `User ${req.params.empId} updated successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.deleteUserByEmpId = (req, res) => {
  User.deleteById(req.params.empId, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: httpCode[500].message,
        error: err,
        description: httpCode[500].description,
      });
      res.end();
    } else if (data.affectedRows === 0) {
      res.status(404).status(404).send({
        status: 404,
        empId: req.params.empId,
        message: httpCode[404].message,
        description: httpCode[404].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        response: `User ${req.params.empId} deleted successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.getUserByEmpId = (req, res) => {
  User.getById(req.params.empId, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: httpCode[500].message,
        error: err,
        description: httpCode[500].description,
      });
      res.end();
    } else if (data.length === 0) {
      res.status(404).status(404).send({
        status: 404,
        empId: req.params.empId,
        message: httpCode[404].message,
        description: httpCode[404].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        response: data,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.userLogin = (req, res) => {
  User.userLogin(req.body.emailId, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: httpCode[500].message,
        error: err,
        description: httpCode[500].description,
      });
      res.end();
    } else if (data.length === 0) {
      res.status(404).status(404).send({
        status: 404,
        empId: req.params.empId,
        message: httpCode[404].message,
        description: httpCode[404].description,
      });
      res.end();
    } else {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        data[0]["password"]
      );
      if (passwordIsValid) {
        const token = Jwt.sign(
          { emailId: req.body.emailId },
          authConfig.secret,
          {
            expiresIn: 86400, // expires in 24 hours
          }
        );
        data[0]["password"] = null;
        res.status(200).send({
          status: 200,
          message: httpCode[200].message,
          response: data,
          token: token,
        });
        res.end();
      } else {
        res.status(401).send({
          status: 401,
          message: httpCode[401].message,
          response: "Please enter correct email Id or password.",
        });
        res.end();
      }
    }
  });
  httpLog(req, res);
};
