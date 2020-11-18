const faker = require('faker');
const {connection} = require('./db.js');

// Table types
function generateTypes() {

  function getProducts() {

    var set = new Set();
    while (set.size < 5) {
      set.add(faker.commerce.product());
    }

    var arr = Array.from(set);
    return arr.map(type => [type]);

  }

  var values = getProducts();
  var queryStr = 'INSERT INTO types ( name ) values ?';
  connection.query(queryStr, [values], function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Product types added into the db');
    }
  })

}
generateTypes();

// Table categories
function generateCategories() {

  function getCategories() {

    var set = new Set();
    while (set.size < 5) {
      set.add(faker.commerce.department());
    }

    var arr = Array.from(set);
    return arr.map(category => [category]);
  }

  var values = getCategories();
  var queryStr = 'INSERT INTO categories (name) values ? ';
  connection.query(queryStr, [values], function(err) {
    if (err) {
      throw err;
    } else {
      console.log('Categories added in the db');
    }
  })
}
generateCategories();

//Table recommended
function generateRecommended () {

  function subset () {
    var products = [];

    for (var i = 0; i < 100; i++) {
      var type_id = Math.ceil(Math.random() * 5);
      var category_id = Math.ceil(Math.random() * 5);
      var image_url = faker.image.nature();
      var brand = faker.company.companyName();
      var name = faker.commerce.productName();
      var ratings = (Math.random() * 5.0).toFixed(1);
      var reviews = Math.floor(Math.random() * 200);
      var price = (Math.random() * 1000).toFixed(2);

      products.push([type_id, category_id, image_url, brand, name, ratings, reviews, price]);
    }

    return products;
  }

  var values = subset();

  var queryStr = 'INSERT INTO recommended (type_id, category_id, image_url, brand, name, ratings, reviews, price) values ?';
  connection.query(queryStr, [values], function(err) {
    if (err) {
      throw err;
    } else {
      console.log('records added to the table recommended');
    }
  })
}
generateRecommended();

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