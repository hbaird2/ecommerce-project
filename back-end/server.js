var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://rachelbaird@localhost/ecommerce";

var massiveInstance = massive.connectSync({connectionString : connectionString})

var app = module.exports = express();
app.use(express.static('front-end'));
app.use(bodyParser.json());
app.set('db', massiveInstance);
var controller = require('./dataCtrl.js');


app.get('/api/products', controller.getAll);

app.listen('8888', function(){
  console.log("Successfully listening on : 8888")
})
