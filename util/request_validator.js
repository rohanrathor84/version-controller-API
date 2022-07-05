const Jwt = require("jsonwebtoken");
const Joi = require("joi");
const config = require("../auth/auth_config");
const statusCode = require("./http_status_codes");
const log = require("../logs/logger");

const middleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
      res.status(401).send({
        status: 401,
        auth: false,
        message: statusCode[401].message,
        description: statusCode[401].description,
      });
      log.info("status: " + 401 + " message: " + statusCode[401].message);
    } else {
      Jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          log.error("status: " + 403 + " message: " + statusCode[403].message);
          return res.status(403).send({
            status: 403,
            auth: false,
            message: statusCode[403].message,
            description: statusCode[403].description,
          });
        }

        req = decoded;
        next();
      });
    }
  },

  validate: (schema, property) => {
    return (req, res, next) => {
      const { error } = Joi.validate(req[property], schema);

      const valid = error == null;
      if (valid) {
        next();
      } else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");

        res.status(400).send({
          status: 400,
          message: statusCode[400].message,
          error: message,
          description: statusCode[400].description,
        });
        log.info("status: " + 400 + " message: " + message);
      }
    };
  },
};

module.exports = middleware;
