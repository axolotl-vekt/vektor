const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/',router);

app.get('/', (res,req) => {

});