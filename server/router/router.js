const path = require('path');
const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '../../client/index.html'))
});

router.post('/', (req,res) => {
    return res.status(200).json({})
})



module.exports = router;