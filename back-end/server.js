var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
// var config = require('../config.js')
// uncomment to run local
// var connectionString = "postgres://rachelbaird@localhost/ecommerce";
var port = process.env.PORT || 8888;
var app = module.exports = express();
var connectionString = process.env.DATABASE_URL;


var massiveInstance = massive.connectSync({connectionString : connectionString})

// app.use(express.static('../front-end'));
// app.get('/', function (req, res) {
//   res.sendFile('../front-end/index.html')
// })
app.use(bodyParser.json());

app.set('db', massiveInstance);
var controller = require('./dataCtrl.js');

app.use(express.static(path.join(__dirname, 'front-end')));
// uncomment to run local
// app.get('/', function(request, response) {
// response.send('Hello World!');
// });

app.get('/api/products', controller.getAll);

// heroku postgres
// var pg = require('pg');
// pg.defaults.ssl = true;
//
// app.get('/api/products', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');
//
//   client
//     .query('SELECT * FROM product;')
//     .on('row', function(row) {
//       console.log(JSON.stringify(row));
//     });
// });
// });


app.listen(port, function(){
  console.log("Successfully listening on : " + port)
})
