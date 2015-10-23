define({ "api": [
  {
    "type": "post",
    "url": "/experience",
    "title": "Create an experience",
    "name": "CreateExperience",
    "group": "Experience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the new experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "date",
            "description": "<p>Unix timestamp of the date and time of the experience</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ValidUserBasicAuthRequired"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the created experience</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"id\": 3,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missingField",
            "description": "<p>title, valid date, and location required - one or more was not provided</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "timestampError",
            "description": "<p>timestamp must be positive unix time integer, down to seconds resolution</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"experience\": \"title, valid date, and location required\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"experience\": \"timestamp must be positive unix time integer, down to seconds resolution\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "get",
    "url": "/experience",
    "title": "Get a JSON object of an experience",
    "name": "GetExperience",
    "group": "Experience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the desired experience</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ValidUserBasicAuthRequired"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the experience</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "date",
            "description": "<p>date of the experience</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "ttime",
            "description": "<p>id of the consumption for which T-0:00 time format is based off</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>title of the experience</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>location of the experience</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "notes",
            "description": "<p>notes for the experience</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "panicmsg",
            "description": "<p>user's panic message for the created experience</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "rating_id",
            "description": "<p>rating of general experience quality</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "owner",
            "description": "<p>id of the owner of the experience</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"date\": 1445543583,\n   \"id\": 1,\n   \"location\": \"My Location\",\n   \"notes\": \"This is great.\",\n   \"owner\": 1,\n   \"panicmsg\": \"Oh snap help me!\",\n   \"rating_id\": 3,\n   \"title\": \"Great Time\",\n   \"ttime\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "missingID",
            "description": "<p>id was not provided</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "noRecords",
            "description": "<p>no results found for the given ID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"experience\": \"id must be provided\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "get",
    "url": "/experience/search",
    "title": "Retrieve an array of experiences that match the provided criteria",
    "name": "SearchExperience",
    "group": "Experience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "startdate",
            "description": "<p>Unix timestamp of beginning of date range to select</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "enddate",
            "description": "<p>Unix timestamp of end of date range to select</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>experiences where this string is contained in the title will be retrieved</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>experiences where this string is contained in the location field will be retrieved</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "notes",
            "description": "<p>experiences where this string is contained in the notes field will be retrieved</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "rating_id",
            "description": "<p>experiences with this rating will be retrieved</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "limit",
            "description": "<p>only return this number of rows</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "offset",
            "description": "<p>offset the returned number of rows by this amount (requires limit)</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ValidUserBasicAuthRequired"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "noResults",
            "description": "<p>no experiences match the provided criteris</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "put",
    "url": "/experience",
    "title": "Update an experience",
    "name": "UpdateExperience",
    "group": "Experience",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>id of the experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "date",
            "description": "<p>date of the experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "ttime",
            "description": "<p>id of the consumption for which T-0:00 time format is based off</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>title of the experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "location",
            "description": "<p>location of the experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "notes",
            "description": "<p>notes for the experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "panicmsg",
            "description": "<p>user's panic message for the created experience</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "rating_id",
            "description": "<p>rating of general experience quality</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ValidUserBasicAuthRequired"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "noFields",
            "description": "<p>no fields to set were provided</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "illegalField",
            "description": "<p>a field to update was send that is not permitted (must be in above list)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"experience\": \"no fields provided\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"experience\": \"custom field requested that is not permitted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/experience.js",
    "groupTitle": "Experience"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a user",
    "name": "RegisterUser",
    "group": "Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "5...",
            "optional": false,
            "field": "username",
            "description": "<p>username for the new user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "10...",
            "optional": false,
            "field": "password",
            "description": "<p>password for the new user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "validationError",
            "description": "<p>one or more validations on the username or password failed</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "hashError",
            "description": "<p>an error was encountered during password hashing</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  userpass: \"username must be at least five characters and alphanumeric; password must be at least ten characters\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 server error\n{\n  \"hash\": \"general hash error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/register.js",
    "groupTitle": "Registration"
  },
  {
    "type": "get",
    "url": "/status/db",
    "title": "View DB status",
    "name": "GetDBStatus",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "online",
            "description": "<p>indicates whether the database is online</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "tables",
            "description": "<p>count of database tables</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"online\": true,\n   \"tables\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/status.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "View system status",
    "name": "GetStatus",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>always returns &quot;up&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "host",
            "description": "<p>hostname of the server running the API</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "uptime",
            "description": "<p>uptime of the script in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "database",
            "description": "<p>database information</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "database.file",
            "description": "<p>location of the sqlite database file</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "database.online",
            "description": "<p>indicates whether the database is online</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "database.tables",
            "description": "<p>count of database tables</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"up\",\n   \"host\": \"yourHostName\",\n   \"uptime\": 3,\n   \"database\": {\n     \"file\": \"data/db/suptracked.db\",\n     \"online\": true,\n     \"tables\": 4\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/status.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/status/up",
    "title": "Check whether the system is up",
    "name": "GetUp",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>always returns &quot;up&quot;</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"up\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/status.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get user data",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "ValidUserBasicAuthRequired"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>id of the created experience</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "emergcontact",
            "description": "<p>phone number of the user's emergency contact</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number of the user</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "admin",
            "description": "<p>1 if the user is an administrator, 0 if they are not</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": jsmith,\n  \"emergcontact\": 5551234567,\n  \"phone\": 694165516,\n  \"admin\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user",
    "title": "Update an experience",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "emergcontact",
            "description": "<p>phone number of the user's emergency contct</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "phone",
            "description": "<p>phone number for the user</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ValidUserBasicAuthRequired"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "noFields",
            "description": "<p>no fields to set were provided</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "illegalField",
            "description": "<p>a field to update was send that is not permitted (must be in above list)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"user\": \"no fields provided\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"user\": \"custom field requested that is not permitted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/password",
    "title": "Update the user's password",
    "name": "UpdateUserPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>user's new password</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ValidUserBasicAuthRequired"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "tooShort",
            "description": "<p>password too short or not provided</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "hashError",
            "description": "<p>a general hashing error was encountered</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"password\": \"password too short or not provided\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Errror\n{\n  \"hash\": \"general hash error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });