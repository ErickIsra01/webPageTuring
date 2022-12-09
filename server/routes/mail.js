const sendEmail = require("../services/sendEmail");
const express = require("express");

const app = express();

//Calls sendEmail service
app.post("/", (req, res) => {
  try {
    sendEmail();
    res.send("Correo enviado");
  } catch(error) {
    res.status(500).send({
      error: true,
      msg: "Something went wrong, try again later"
    });
  };
})

module.exports = app;