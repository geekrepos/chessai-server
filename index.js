const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

require('./connection/DBConfig');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}))


// Add header
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res)=>{
  console.log(req, res);

  res.send({"hello":"as"})
})

app.post('/api/signup', (req, res) => {
  console.log(req.body);
})

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // console.log(req, res);
  console.log({username, password});
  res.send({"OK":'OK'})
})

server.listen(9000, ()=>{
  console.log("Server listening on port 9000")
})
