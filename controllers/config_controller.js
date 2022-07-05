const Config = require("../models/config_model");
const httpLog = require("../util/http_logs");
const httpCode = require("../util/http_status_codes");

exports.getAllConfig = (req, res) => {
  Config.getAll((err, data) => {
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
        versions: data,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.createConfig = (req, res) => {
  const newConfig = new Config(req.body);
  Config.createNew(newConfig, (err, data) => {
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
        response: `New version entry created successfully.`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.updateConfigById = (req, res) => {
  //const newConfig = new Config(req.body);
  Config.updateById(req.params.id, req.body, (err, data) => {
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
        response: `Version configuration ${req.params.id} updated successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.deleteConfigById = (req, res) => {
  Config.deleteById(req.params.id, (err, data) => {
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
        response: `Version configuration ${req.params.empId} deleted successfully`,
      });
      res.end();
    }
  });
  httpLog(req, res);
};

exports.getConfigById = (req, res) => {
  Config.getById(req.params.id, (err, data) => {
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
