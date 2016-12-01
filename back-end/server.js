var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('../config.js')
// uncomment to run local
// var connectionString = "postgres://rachelbaird@localhost/ecommerce";
var connectionString = "DATABASE_URL";
var port = process.env.PORT || 8888;


var massiveInstance = massive.connectSync({connectionString : connectionString})

var app = module.exports = express();
app.use(express.static('front-end'));
// app.get('/', function (req, res) {
//   res.sendFile('../front-end/index.html')
// })
app.use(bodyParser.json());
// uncomment to run local
app.set('db', massiveInstance);
var controller = require('./dataCtrl.js');

// uncomment to run local
app.get('/api/products', controller.getAll);

// heroku postgres
// var pg = require('pg');

// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// });


app.listen(port, function(){
  console.log("Successfully listening on : " + port)
})
