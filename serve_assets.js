/* eslint-disable */
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.listen(8181, console.log);
console.log('listining on port 8181');
console.log('got to localhost:8181/assets/<asset name>');
