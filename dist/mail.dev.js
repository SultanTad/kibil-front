"use strict";

var nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAUL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});