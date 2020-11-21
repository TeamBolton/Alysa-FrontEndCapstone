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

var getRecommended = function (id, callback) {

  var queryStr = `SELECT * FROM RECOMMENDED WHERE TYPE_ID = (SELECT TYPE_ID FROM RECOMMENDED WHERE ID = ${id}) LIMIT 11`;
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