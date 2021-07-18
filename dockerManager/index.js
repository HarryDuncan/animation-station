

const express = require('express');
const manager = require('./protos/dockerManager_pb')
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');

const PORT = 8180;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
