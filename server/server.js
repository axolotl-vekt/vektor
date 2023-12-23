const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const controller = require('./controller/controller.js');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use('/',router);

app.get('/', (res,req) => {

});