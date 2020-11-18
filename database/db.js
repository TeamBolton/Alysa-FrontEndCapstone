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


/** faker.()
 *
 * table types:
 * (id - no need to generate, will automatically increment)
 * name of product types (boots, jackets, etc) : commerce.product (pizza, towel, car, ...)
 *
 * table categories:
 * (id - no need)
 * name of categories (camping, hiking, clothing, etc) : commerce.department (games, outdoor, movies...)
 *
 * table recommended:
 * (id - no need)
 * (type_id from table types)
 * (category_id from category table)
 * image_url : image.nature
 * brand : company.companyName
 * name : commerce.productName
 * ratings (3.5, 2.0, 5.0...) :
 * reviews (10, 25, 30)
 * price (30.00, 400.00) : commerce.price
 */

module.exports = {
  connection
};