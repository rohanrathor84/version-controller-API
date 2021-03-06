define({ "api": [
  {
    "type": "post",
    "url": "/getAuth",
    "title": "Create new auth token",
    "version": "0.1.0",
    "name": "CreateToken",
    "group": "Authorization",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/getAuth",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>eyJhbGciOiJIUzI1NiJ9.c2VjcmV0X2tleQ.Jswcf2KKOasCFP4ky8qjGcjlrwb5lnMhYuHeRCswKVI.</p>"
          }
        ]
      }
    },
    "filename": "./routes/route.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/role",
    "title": "Create new role",
    "version": "0.1.0",
    "name": "CreateRole",
    "group": "Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/role",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role is mandatory.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role <code>role</code> created successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "{\n      \"status\": 400,\n      \"message\": \"Bad Request\",\n      \"error\": \"\\\"role\\\" is required\",\n      \"description\": \"The server did not understand the request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "Role"
  },
  {
    "type": "delete",
    "url": "/role/:id",
    "title": "Delete a role",
    "version": "0.1.0",
    "name": "DeleteRole",
    "group": "Role",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/role/:id",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Role id in url.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Role <code>id</code> deleted successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      }
    },
    "filename": "./routes/route.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/:id",
    "title": "Get a user role",
    "version": "0.1.0",
    "name": "GetRole",
    "group": "Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/role/:id",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The role-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Created Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>Updated Date.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role",
    "title": "Get all user role",
    "version": "0.1.0",
    "name": "GetRole",
    "group": "Role",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/role",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The role-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Created Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>Updated Date.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "Role"
  },
  {
    "type": "put",
    "url": "/role/:id",
    "title": "Update user role",
    "version": "0.1.0",
    "name": "UpdateRole",
    "group": "Role",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/role/:id",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Role id in Url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role is mandatory.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"role\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Role <code>id</code> updated successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      }
    },
    "filename": "./routes/route.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/createUser",
    "title": "Create new user",
    "version": "0.1.0",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/createUser",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>Employee id must be unique and mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "emailId",
            "description": "<p>Employee Email id is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Employee password atleast 8 character and mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "roleId",
            "description": "<p>Employee role id is required.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "emailId",
            "description": "<p>User <code>emailId</code> created successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "{\n      \"status\": 400,\n      \"message\": \"Bad Request\",\n      \"error\": \"\\\"empId\\\" is required\",\n      \"description\": \"The server did not understand the request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:empId",
    "title": "Delete a user",
    "version": "0.1.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/user/:empId",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>Employee id of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>User <code>empId</code> deleted successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      }
    },
    "filename": "./routes/route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:empId",
    "title": "Get user by empId",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/user/:empId",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "emailId",
            "description": "<p>Employee Email id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Created Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>Updated Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roleId",
            "description": "<p>Employee role id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getUser",
    "title": "Get all users",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/getUsers",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>Employee id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "emailId",
            "description": "<p>Employee Email id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Created Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>Updated Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roleId",
            "description": "<p>Employee role id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:empId",
    "title": "Update a user",
    "version": "0.1.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/user/:empId",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "empId",
            "description": "<p>Employee id of the User in Url.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "emailId",
            "description": "<p>Employee Email id (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Employee password atleast 8 character (Optional).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"emailId\": \"karan.arjun@gmail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "empId",
            "description": "<p>User <code>emailId</code> updated successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      }
    },
    "filename": "./routes/route.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/version",
    "title": "Create new version entry",
    "version": "0.1.0",
    "name": "CreateNewVersion",
    "group": "Version",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/version",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appVersion",
            "description": "<p>Application version is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "reactVersion",
            "description": "<p>React application version is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "versionCode",
            "description": "<p>Version code is mandatory.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reactBundlePath",
            "description": "<p>React bundle path URI is mandatory.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "emailId",
            "description": "<p>User <code>emailId</code> created successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        },
        {
          "title": "Response (example):",
          "content": "{\n      \"status\": 400,\n      \"message\": \"Bad Request\",\n      \"error\": \"\\\"reactBundlePath\\\" is required\",\n      \"description\": \"The server did not understand the request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "Version"
  },
  {
    "type": "delete",
    "url": "/version/:id",
    "title": "Delete a version configuration",
    "version": "0.1.0",
    "name": "DeleteVersionConfig",
    "group": "Version",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/version/:id",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Version id in url.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Version configuration <code>id</code> deleted successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      }
    },
    "filename": "./routes/route.js",
    "groupTitle": "Version"
  },
  {
    "type": "get",
    "url": "/version/:id",
    "title": "Get a version information",
    "version": "0.1.0",
    "name": "GetVersion",
    "group": "Version",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/version/:id",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Version config-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Created Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>Updated Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appVersion",
            "description": "<p>Application version.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reactVersion",
            "description": "<p>React application version.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "versionCode",
            "description": "<p>Version code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reactBundlePath",
            "description": "<p>React bundle path URI.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "Version"
  },
  {
    "type": "get",
    "url": "/version",
    "title": "Get all version information",
    "version": "0.1.0",
    "name": "GetVersion",
    "group": "Version",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/version",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The Version config-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdOn",
            "description": "<p>Created Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>Updated Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appVersion",
            "description": "<p>Application version.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reactVersion",
            "description": "<p>React application version.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "versionCode",
            "description": "<p>Version code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reactBundlePath",
            "description": "<p>React bundle path URI.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "{\n    \"status\": 403,\n    \"auth\": false,\n    \"message\": \"Forbidden\",\n    \"description\": \"Access is forbidden to the requested page. Please provide correct token.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/route.js",
    "groupTitle": "Version"
  },
  {
    "type": "put",
    "url": "/version/:id",
    "title": "Update version configuration",
    "version": "0.1.0",
    "name": "UpdateVersionConfig",
    "group": "Version",
    "permission": [
      {
        "name": "none"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/version/:id",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Version id of the configuration in Url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appVersion",
            "description": "<p>Application version (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "reactVersion",
            "description": "<p>React application version (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "versionCode",
            "description": "<p>Version code (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reactBundlePath",
            "description": "<p>React bundle path URI (Optional).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"reactBundlePath\": \"uri://home/versionConfig/v5/6\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Version configuration <code>id</code> updated successfully.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "The",
            "description": "<p>requested page needs a token to verify.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Access",
            "description": "<p>is forbidden to the requested page. Please provide correct token.</p>"
          }
        ]
      }
    },
    "filename": "./routes/route.js",
    "groupTitle": "Version"
  }
] });
