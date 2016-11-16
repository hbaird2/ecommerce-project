var app = require('./server.js');
var db = app.get('db');

module.exports = {
  // getAll: function(req, res) {
  //   db.run('select * from product', function(err, res) {
  //     console.log(err, res);
  //   })
  //   res.send('work');
  // }
  getAll: function(req, res) {
    db.read_product(function(err, product) {
      // console.log(err, product);
      res.send(product);
    })
  }
}
