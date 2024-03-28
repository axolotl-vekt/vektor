require('dotenv').config()
const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const controller = require('./controllers/controller.js');
//forgot to npm i cors, just did now
const cors = require('cors');
const mongoose = require('mongoose');
//npm i cookie-parser- EW
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connected..')
    })

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')));
app.use('/api', router);

// app.get('/', (res,req) => {
//     return res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.use('*', (req,res) => {
    return res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'An Error Occurred',
        status: 500,
        message: { err: 'An error occurred' },
      };
      const errorObj = Object.assign({}, defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
    // console.log(err);
    // res.status(500).send({ error: err });
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;
