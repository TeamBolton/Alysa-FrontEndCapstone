const faker = require('faker');
const {connection} = require('./db.js');

// Table types
function generateTypes() {

  function getProducts() {
    // var products = [];
    // for (var i = 0; i < 30; i++) {
    //   products.push([faker.commerce.product()]);
    // }
    // return products;

    var set = new Set();
    while (set.size < 5) {
      set.add(faker.commerce.product());
    }

    var arr = Array.from(set);
    return arr.map(type => [type]);

  }

  var values = getProducts();
  // console.log(values);

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
  // console.log(values);
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
// create a set/array of 25, then repeat it 4 times to generate 100 records
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
      var price = faker.commerce.price();

      products.push([type_id, category_id, image_url, brand, name, ratings, reviews, price]);
    }

    return products;
  }

  var values = subset();
  // console.log(values);
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