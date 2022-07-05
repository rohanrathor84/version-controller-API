const Joi = require("joi");

const schemas = {
  //
  USER_CREATE: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    empId: Joi.string().required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    emailId: Joi.string()
      .email({
        minDomainAtoms: 2,
      })
      .required(),
    roleId: Joi.number().integer().required(),
  }),

  //
  USER_UPDATE: Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    emailId: Joi.string().email({
      minDomainAtoms: 2,
    }),
    roleId: Joi.number().integer(),
  }),

  //
  USER_URL: {
    empId: Joi.number().min(1).required(),
  },

  USER_LOGIN: {
    emailId: Joi.string().email({
      minDomainAtoms: 2,
    }),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  },

  //
  VERSION_CREATE: Joi.object().keys({
    appVersion: Joi.string().required(),
    reactVersion: Joi.string().required(),
    versionCode: Joi.string().required(),
    reactBundlePath: Joi.string().required(),
  }),
  VERSION_UPDATE: Joi.object().keys({
    appVersion: Joi.string(),
    reactVersion: Joi.string(),
    versionCode: Joi.string(),
    reactBundlePath: Joi.string(),
  }),
  VERSION_URL: {
    id: Joi.number().min(1).required(),
  },

  ROLE_CREATE: {
    role: Joi.string().required(),
  },
  ROLE_URL: {
    id: Joi.number().min(1).required(),
  },

  CREATE_ANDROID_IOS_VERSION: Joi.object().keys({
    appVersion: Joi.string().required(),
    reactNativeVersion: Joi.string().required(),
    shopReactVersion: Joi.string().required(),
    parentReactVersion: Joi.string().required(),
    shopBundlePath: Joi.string().required(),
    parentBundlePath: Joi.string().required(),
    versionCode: Joi.string(),
    description: Joi.string().required(),
  }),
  UPDATE_ANDROID_IOS_VERSION: Joi.object().keys({
    appVersion: Joi.string(),
    reactNativeVersion: Joi.string(),
    shopReactVersion: Joi.string(),
    parentReactVersion: Joi.string(),
    shopBundlePath: Joi.string(),
    parentBundlePath: Joi.string(),
    versionCode: Joi.string(),
    description: Joi.string(),
  }),
  ANDROID_IOS_VERSION_URL: {
    id: Joi.number().min(1).required(),
  },
};

module.exports = schemas;
