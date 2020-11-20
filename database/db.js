const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'rewhy',
});

// connection.connect(function(err) {
//   if (err) {
//     console.log('err--------', err)
//   } else {
//     console.log('SUCCESSFUL CONNECTION to db!');
//   }
// })

var getRecommended = function (callback) {

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