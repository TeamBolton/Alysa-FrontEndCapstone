const {app} = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);
const mysql = require('mysql');

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

it("Get request to '/api/recommended", async () => {
  const response = await request.get('/api/recommended');

  expect(response.status).toBe(200);
  // done();
});

beforeAll(async () => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test"
  });

  con.connect(function(err) {
    if (err) {
      console.log(err);
    }
    console.log("connected!");

  })
});