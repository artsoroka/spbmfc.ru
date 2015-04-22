var express = require("express"); 
var server  = express(); 
var app     = require("./app/app.js"); 
var port    = process.env.SPBMFC_PORT || 8080; 

server.use('/', app); 

server.listen(port); 

console.log('app started on a port: ', port); 
