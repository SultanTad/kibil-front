"use strict";

var express = require("express");

require("dotenv").config();

var sequelize = require("./db");

var models = require("./models/models");

var cors = require("cors");

var router = require("./routes/index");

var errorHandler = require("./middleware/ErrorHandlingMiddleware");

var fileUpload = require("express-fileupload");

var path = require("path");

var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express["static"](path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler);

var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(sequelize.authenticate());

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(sequelize.sync());

        case 5:
          app.listen(PORT, function () {
            return console.log("Server started on port ".concat(PORT));
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

start();