//index.js 
//load express module
var express = require("express");
//create an app
var app = exress();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.set("view engine", "ejs");
