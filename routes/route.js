module.exports = (app) => {
  const userController = require("../controllers/user_controller");
  const configController = require("../controllers/config_controller");
  const roleController = require("../controllers/role_controller");
  const androidController = require("../controllers/android_controller");
  const iosController = require("../controllers/ios_controller");
  const middleware = require("../util/request_validator");
  const schema = require("../db/schema");

  /**
   * @api {get} /getUsers Get all users
   * @apiVersion 0.1.0
   * @apiName GetUser
   * @apiGroup User
   * @apiPermission admin
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/getUsers
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiSuccess {Number}   id            The Users-ID.
   * @apiSuccess {String}   empId         Employee id.
   * @apiSuccess {Email}    emailId       Employee Email id.
   * @apiSuccess {Date}     createdOn     Created Date.
   * @apiSuccess {Date}     modifiedOn    Updated Date.
   * @apiSuccess {Number}   roleId        Employee role id.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   */
  app.get("/getUsers", [middleware.verifyToken], userController.getAllUser);

  /**
   * @api {post} /createUser Create new user
   * @apiVersion 0.1.0
   * @apiName CreateUser
   * @apiGroup User
   * @apiPermission admin
   *
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/createUser
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {String}   empId         Employee id must be unique and mandatory.
   * @apiParam {Email}    emailId       Employee Email id is mandatory.
   * @apiParam {String}   password      Employee password atleast 8 character and mandatory.
   * @apiParam {Number}   roleId        Employee role id is required.
   *
   * @apiSuccess {Email}  emailId  User <code>emailId</code> created successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   *
   * @apiErrorExample Response (example):
   *     {
   *           "status": 400,
   *           "message": "Bad Request",
   *           "error": "\"empId\" is required",
   *           "description": "The server did not understand the request."
   *     }
   */
  app.post(
    "/createUser",
    [middleware.validate(schema.USER_CREATE, "body")],
    userController.createUser
  );

  /**
   * @api {put} /user/:empId Update a user
   * @apiVersion 0.1.0
   * @apiName UpdateUser
   * @apiGroup User
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/user/:empId
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {Number} empId Employee id of the User in Url.
   *
   * @apiParam {String}   empId         Employee id must be unique (Optional).
   * @apiParam {Email}    emailId       Employee Email id (Optional).
   * @apiParam {String}   password      Employee password atleast 8 character (Optional).
   *
   * @apiParamExample {json} Request-Example:
   *     {
   *       "emailId": "karan.arjun@gmail.com"
   *     }
   *
   * @apiSuccess {String} empId User <code>emailId</code> updated successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   */
  app.put(
    "/user/:empId",
    [
      middleware.verifyToken,
      middleware.validate(schema.USER_UPDATE, "body"),
      middleware.validate(schema.USER_URL, "params"),
    ],
    userController.updateUserByEmpId
  );

  /**
   * @api {delete} /user/:empId Delete a user
   * @apiVersion 0.1.0
   * @apiName DeleteUser
   * @apiGroup User
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/user/:empId
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {String} empId Employee id of the User.
   *
   * @apiSuccess {String} empId User <code>empId</code> deleted successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   */
  app.delete(
    "/user/:empId",
    [middleware.verifyToken, middleware.validate(schema.USER_URL, "params")],
    userController.deleteUserByEmpId
  );

  /**
   * @api {get} /user/:empId Get user by empId
   * @apiVersion 0.1.0
   * @apiName GetUser
   * @apiGroup User
   * @apiPermission admin
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/user/:empId
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiSuccess {Number}   id            The Users-ID.
   * @apiSuccess {String}   empId         Employee id.
   * @apiSuccess {Email}    emailId       Employee Email id.
   * @apiSuccess {Date}     createdOn     Created Date.
   * @apiSuccess {Date}     modifiedOn    Updated Date.
   * @apiSuccess {Number}   roleId        Employee role id.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   */
  app.get(
    "/user/:empId",
    [middleware.verifyToken, middleware.validate(schema.USER_URL, "params")],
    userController.getUserByEmpId
  );

  app.post(
    "/userLogin",
    [middleware.validate(schema.USER_LOGIN, "body")],
    userController.userLogin
  );

  /**
   * @api {get} /version Get all version information
   * @apiVersion 0.1.0
   * @apiName GetVersion
   * @apiGroup Version
   * @apiPermission admin
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/version
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiSuccess {Number}   id                The Version config-ID.
   * @apiSuccess {Date}     createdOn         Created Date.
   * @apiSuccess {Date}     modifiedOn        Updated Date.
   * @apiSuccess {String}   appVersion        Application version.
   * @apiSuccess {String}   reactVersion      React application version.
   * @apiSuccess {String}   versionCode       Version code.
   * @apiSuccess {String}   reactBundlePath   React bundle path URI.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   */
  app.get("/version", configController.getAllConfig);

  /**
   * @api {post} /version Create new version entry
   * @apiVersion 0.1.0
   * @apiName CreateNewVersion
   * @apiGroup Version
   * @apiPermission admin
   *
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/version
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {String}   appVersion         Application version is mandatory.
   * @apiParam {Email}    reactVersion       React application version is mandatory.
   * @apiParam {String}   versionCode        Version code is mandatory.
   * @apiParam {Number}   reactBundlePath    React bundle path URI is mandatory.
   *
   * @apiSuccess {Email}  emailId  User <code>emailId</code> created successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   *
   * @apiErrorExample Response (example):
   *     {
   *           "status": 400,
   *           "message": "Bad Request",
   *           "error": "\"reactBundlePath\" is required",
   *           "description": "The server did not understand the request."
   *     }
   */
  app.post(
    "/version",
    [
      middleware.verifyToken,
      middleware.validate(schema.VERSION_CREATE, "body"),
    ],
    configController.createConfig
  );

  /**
   * @api {put} /version/:id Update version configuration
   * @apiVersion 0.1.0
   * @apiName UpdateVersionConfig
   * @apiGroup Version
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/version/:id
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {Number} id Version id of the configuration in Url.
   *
   * @apiParam {String}   appVersion         Application version (Optional).
   * @apiParam {Email}    reactVersion       React application version (Optional).
   * @apiParam {String}   versionCode        Version code (Optional).
   * @apiParam {String}   reactBundlePath    React bundle path URI (Optional).
   *
   * @apiParamExample {json} Request-Example:
   *     {
   *       "reactBundlePath": "uri://home/versionConfig/v5/6"
   *     }
   *
   * @apiSuccess {String} id Version configuration <code>id</code> updated successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   */
  app.put(
    "/version/:id",
    [
      middleware.verifyToken,
      middleware.validate(schema.VERSION_UPDATE, "body"),
      middleware.validate(schema.VERSION_URL, "params"),
    ],
    configController.updateConfigById
  );

  /**
   * @api {delete} /version/:id Delete a version configuration
   * @apiVersion 0.1.0
   * @apiName DeleteVersionConfig
   * @apiGroup Version
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/version/:id
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {String} id Version id in url.
   *
   * @apiSuccess {String} id Version configuration <code>id</code> deleted successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   */
  app.delete(
    "/version/:id",
    [middleware.verifyToken, middleware.validate(schema.VERSION_URL, "params")],
    configController.deleteConfigById
  );

  /**
   * @api {get} /version/:id Get a version information
   * @apiVersion 0.1.0
   * @apiName GetVersion
   * @apiGroup Version
   * @apiPermission admin
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/version/:id
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiSuccess {Number}   id                The Version config-ID.
   * @apiSuccess {Date}     createdOn         Created Date.
   * @apiSuccess {Date}     modifiedOn        Updated Date.
   * @apiSuccess {String}   appVersion        Application version.
   * @apiSuccess {String}   reactVersion      React application version.
   * @apiSuccess {String}   versionCode       Version code.
   * @apiSuccess {String}   reactBundlePath   React bundle path URI.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   */
  app.get(
    "/version/:id",
    [middleware.verifyToken, middleware.validate(schema.VERSION_URL, "params")],
    configController.getConfigById
  );

  /**
   * @api {get} /role Get all user role
   * @apiVersion 0.1.0
   * @apiName GetRole
   * @apiGroup Role
   * @apiPermission admin
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/role
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiSuccess {Number}   id                The role-ID.
   * @apiSuccess {String}   role              User role.
   * @apiSuccess {Date}     createdOn         Created Date.
   * @apiSuccess {Date}     modifiedOn        Updated Date.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   */
  app.get("/role", [middleware.verifyToken], roleController.getAllRole);

  /**
   * @api {post} /role Create new role
   * @apiVersion 0.1.0
   * @apiName CreateRole
   * @apiGroup Role
   * @apiPermission admin
   *
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/role
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {String}   role         User role is mandatory.
   *
   * @apiSuccess {String}  role  Role <code>role</code> created successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   *
   * @apiErrorExample Response (example):
   *     {
   *           "status": 400,
   *           "message": "Bad Request",
   *           "error": "\"role\" is required",
   *           "description": "The server did not understand the request."
   *     }
   */
  app.post(
    "/role",
    [middleware.verifyToken, middleware.validate(schema.ROLE_CREATE, "body")],
    roleController.createRole
  );

  /**
   * @api {put} /role/:id Update user role
   * @apiVersion 0.1.0
   * @apiName UpdateRole
   * @apiGroup Role
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/role/:id
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {Number} id Role id in Url.
   *
   * @apiParam {String}   role         User role is mandatory.
   *
   * @apiParamExample {json} Request-Example:
   *     {
   *       "role": "admin"
   *     }
   *
   * @apiSuccess {String} id Role <code>id</code> updated successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   */
  app.put(
    "/role/:id",
    [
      middleware.verifyToken,
      middleware.validate(schema.ROLE_CREATE, "body"),
      middleware.validate(schema.ROLE_URL, "params"),
    ],
    roleController.updateRoleById
  );

  /**
   * @api {delete} /role/:id Delete a role
   * @apiVersion 0.1.0
   * @apiName DeleteRole
   * @apiGroup Role
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/role/:id
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiParam {String} id Role id in url.
   *
   * @apiSuccess {String} id Role <code>id</code> deleted successfully.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   */
  app.delete(
    "/role/:id",
    [middleware.verifyToken, middleware.validate(schema.ROLE_URL, "params")],
    roleController.deleteRoleById
  );

  /**
   * @api {get} /role/:id Get a user role
   * @apiVersion 0.1.0
   * @apiName GetRole
   * @apiGroup Role
   * @apiPermission admin
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/role/:id
   *
   * @apiHeader {String} x-access-token Users unique access-key.
   *
   * @apiSuccess {Number}   id                The role-ID.
   * @apiSuccess {String}   role              User role.
   * @apiSuccess {Date}     createdOn         Created Date.
   * @apiSuccess {Date}     modifiedOn        Updated Date.
   *
   * @apiError The requested page needs a token to verify.
   * @apiError Access is forbidden to the requested page. Please provide correct token.
   *
   * @apiErrorExample Response (example):
   *     {
   *         "status": 403,
   *         "auth": false,
   *         "message": "Forbidden",
   *         "description": "Access is forbidden to the requested page. Please provide correct token."
   *     }
   */
  app.get(
    "/role/:id",
    [middleware.verifyToken, middleware.validate(schema.ROLE_URL, "params")],
    roleController.getRoleById
  );

  /**
   * @api {post} /getAuth Create new auth token
   * @apiVersion 0.1.0
   * @apiName CreateToken
   * @apiGroup Authorization
   * @apiPermission admin
   *
   *
   * @apiExample Example usage:
   * curl -i http://localhost:5000/getAuth
   *
   * @apiSuccess {String}  message  OK.
   * @apiSuccess {String}  token  eyJhbGciOiJIUzI1NiJ9.c2VjcmV0X2tleQ.Jswcf2KKOasCFP4ky8qjGcjlrwb5lnMhYuHeRCswKVI.
   *
   */
  app.post("/getAuth", userController.authorization);

  app
    .route("/android/version")
    .get([middleware.verifyToken], androidController.getAllConfig)
    .post(
      [
        middleware.verifyToken,
        middleware.validate(schema.CREATE_ANDROID_IOS_VERSION, "body"),
      ],
      androidController.createConfig
    );

  app
    .route("/android/version/:id")
    .get(
      [
        middleware.verifyToken,
        middleware.validate(schema.ANDROID_IOS_VERSION_URL, "params"),
      ],
      androidController.getConfigById
    )
    .put(
      [
        middleware.verifyToken,
        middleware.validate(schema.UPDATE_ANDROID_IOS_VERSION, "body"),
        middleware.validate(schema.ANDROID_IOS_VERSION_URL, "params"),
      ],
      androidController.updateConfigById
    )
    .delete(
      [
        middleware.verifyToken,
        middleware.validate(schema.ANDROID_IOS_VERSION_URL, "params"),
      ],
      androidController.deleteConfigById
    );

  app
    .route("/ios/version")
    .get([middleware.verifyToken], iosController.getAllConfig)
    .post(
      [
        middleware.verifyToken,
        middleware.validate(schema.CREATE_ANDROID_IOS_VERSION, "body"),
      ],
      iosController.createConfig
    );

  app
    .route("/ios/version/:id")
    .get(
      [
        middleware.verifyToken,
        middleware.validate(schema.ANDROID_IOS_VERSION_URL, "params"),
      ],
      iosController.getConfigById
    )
    .put(
      [
        middleware.verifyToken,
        middleware.validate(schema.UPDATE_ANDROID_IOS_VERSION, "body"),
        middleware.validate(schema.ANDROID_IOS_VERSION_URL, "params"),
      ],
      iosController.updateConfigById
    )
    .delete(
      [
        middleware.verifyToken,
        middleware.validate(schema.ANDROID_IOS_VERSION_URL, "params"),
      ],
      iosController.deleteConfigById
    );

  // app.route("/user")
  //     .get([middleware.verifyToken], userController.getAllUser)
  //     .post([middleware.verifyToken, middleware.validate(schema.USER_CREATE, "body")], userController.createUser);

  // app.route("/user/:empId")
  //     .get([middleware.verifyToken, middleware.validate(schema.USER_URL, "params")], userController.getUserByEmpId)
  //     .put([middleware.verifyToken, middleware.validate(schema.USER_UPDATE, "body"), middleware.validate(schema.USER_URL, "params")], userController.updateUserByEmpId)
  //     .delete([middleware.verifyToken, middleware.validate(schema.USER_URL, "params")], userController.deleteUserByEmpId);

  // app.route("/version")
  //     .get([middleware.verifyToken], configController.getAllConfig)
  //     .post([middleware.verifyToken, middleware.validate(schema.VERSION_CREATE, "body")], configController.createConfig)

  // app.route("/version/:id")
  //     .get([middleware.verifyToken, middleware.validate(schema.VERSION_URL, "params")], configController.getConfigById)
  //     .put([middleware.verifyToken, middleware.validate(schema.VERSION_UPDATE, "body"), middleware.validate(schema.VERSION_URL, "params")], configController.updateConfigById)
  //     .delete([middleware.verifyToken, middleware.validate(schema.VERSION_URL, "params")], configController.deleteConfigById);

  // app.route("/role")
  //     .get([middleware.verifyToken], roleController.getAllRole)
  //     .post([middleware.verifyToken, middleware.validate(schema.ROLE_CREATE, "body")], roleController.createRole)

  // app.route("/role/:id")
  //     .get([middleware.verifyToken, middleware.validate(schema.ROLE_URL, "params")], roleController.getRoleById)
  //     .put([middleware.verifyToken, middleware.validate(schema.ROLE_CREATE, "body"), middleware.validate(schema.ROLE_URL, "params")], roleController.updateRoleById)
  //     .delete([middleware.verifyToken, middleware.validate(schema.ROLE_URL, "params")], roleController.deleteRoleById)

  // app.route("/getAuth").post(userController.authorization);
};
