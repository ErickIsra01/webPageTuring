const email = require("../routes/mail")
const express = require("express");
const app = express();

app.use("/email", email); //Calling email related routes

module.exports = app;