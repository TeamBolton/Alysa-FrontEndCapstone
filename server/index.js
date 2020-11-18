const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const {getRecommended} = require('../database/db.js');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/recommended', function(req, res) {
  getRecommended(function(err, records) {
    if (err) {
      throw err;
    } else {
      console.log('success response!');
      res.send(records);
    }
  });
})

app.listen(port, () => {
  console.log('listening to port', port);
})

