"use strict";

var express = require("express");

var app = express();

var PORT = 9000;

// Load all routes
require("./routes")(app);

// Listen to the port 3000
app.listen(PORT);

console.log("Running on port" + PORT);
