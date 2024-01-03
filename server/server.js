const path = require('path');
const express = require('express');
const router = require('./router/router.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', router);

app.use('*', (req,res) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return next({message: 'error at a global level'});
  });

app.listen(PORT, () => console.log('Listening on Port: 3000'));
