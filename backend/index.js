const express = require("express");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/employees", employeeRoutes);

module.exports = app;
