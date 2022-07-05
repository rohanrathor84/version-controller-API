const Role = require("../models/role_model");
const httpLog = require("../util/http_logs");
const httpCode = require("../util/http_status_codes");

exports.getAllRole = (req, res) => {
  Role.getAll((err, data) => {
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
        response: data,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.createRole = (req, res) => {
  const newRole = new Role(req.body);
  Role.createNew(newRole, (err, data) => {
    if (err) {
      res.status(500).send({
        status: 500,
        message: httpCode[500].message,
        error: err,
        description: httpCode[500].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        response: `Role ${req.body.role} created successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.updateRoleById = (req, res) => {
  //const newRole = new Role(req.body);
  Role.updateById(req.params.id, req.body, (err, data) => {
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
        id: req.params.id,
        message: httpCode[404].message,
        description: httpCode[404].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        response: `Role ${req.params.id} updated successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.deleteRoleById = (req, res) => {
  Role.deleteById(req.params.id, (err, data) => {
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
        id: req.params.id,
        message: httpCode[404].message,
        description: httpCode[404].description,
      });
      res.end();
    } else {
      res.status(200).send({
        status: 200,
        message: httpCode[200].message,
        response: `Role ${req.params.empId} deleted successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.getRoleById = (req, res) => {
  Role.getById(req.params.id, (err, data) => {
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
        id: req.params.id,
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
