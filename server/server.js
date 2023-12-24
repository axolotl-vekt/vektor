const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const controller = require('./controllers/controller.js');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;

const MONGO_URI = 'mongodb+srv://tawniex44:3vd5DPgTjLU819sO@cluster0.7z5ioep.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use('/', router);

// app.get('/', (res,req) => {
//     return res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;
