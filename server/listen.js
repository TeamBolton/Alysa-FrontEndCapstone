const {app} = require('./server.js');
const port = 3002;

app.listen(port, () => {
  console.log('listening to port', port);
})
