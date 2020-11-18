const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'rewhy'
});

// connection.connect(function(err) {
//   if (err) {
//     console.log('err--------', err)
//   } else {
//     console.log('SUCCESSFUL CONNECTION to db!');
//   }
// })

// get 12 products with the same type_id
var getRecommended = function (callback) {
  //test with the first 12 products from the table
  var queryStr = 'SELECT id, type_id, category_id, image_url, brand, name, ratings, reviews, price FROM recommended LIMIT 11';
  connection.query(queryStr, function(err, result, fields) {
    if (err) {
      throw err;
    }

    callback(null, result);
  });

}

module.exports = {
  connection,
  getRecommended
};