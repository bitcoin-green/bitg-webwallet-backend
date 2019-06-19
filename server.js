const app = require('express')();
const cors = require('cors');
// const fs = require('fs');
const config = require('./config');
const logger = require('./utils/logger');
const http = require('http');
const routeInitialize = require('./routes');

// const sslOptions = {
//   key: fs.readFileSync('config/cert/bitgwebwallet.key', 'utf8'),
//   cert: fs.readFileSync('config/cert/bitgwebwallet.crt', 'utf8'),
// };
let server;
let httpServer; //eslint-disable-line
server = http.createServer(app); // eslint-disable-line
/* if (process.env.NODE_ENV !== 'production') {
  server = require('http').createServer(app); // eslint-disable-line
} else {
  server = require('https').createServer(sslOptions, app); //eslint-disable-line
  httpServer = http.createServer((req, res) => {
    res.writeHead(301, { 'Location': 'https://' + req.headers['host'] + req.url }); // eslint-disable-line
    res.end();
  }).listen(80);
} */
app.logger = logger;
app.options('*', cors());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});

app.use(require('morgan')('dev'));
app.use(require('body-parser').urlencoded({ limit: '50mb', extended: true }));
app.use(require('body-parser').json({ limit: '50mb' }));
app.use(require('cookie-parser')());
routeInitialize(app);

server.listen(config.app.port, () => {
  console.log('Server listening at port %d', config.app.port); // eslint-disable-line
});
