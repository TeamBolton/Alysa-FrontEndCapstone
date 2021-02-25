const {app} = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);
const mysql = require('mysql');

describe('Sample Test', () => {
  it("Testing to see if Jest works", () => {
    expect(1).toBe(1);
  })
})

describe('GET endpoint', () => {
  it("Get request to '/api/recommended", async () => {
    const response = await request.get('/api/recommended/7');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(11);
    expect(Array.isArray(response.body)).toBe(true);
    // done();
  })
})

// beforeAll(async () => {
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "test",
//     password: "test"
//   });

//   con.connect(function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("connected!");
//     }
//   })
// });