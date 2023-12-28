const path = require('path');
const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '../../client/index.html'))
});

router.get('/homepage', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '../../client/index.html'))
});


router.post('/signup', controller.createUser, (req,res) => {
    return res.status(200).json(res.locals.newUser)
})

router.post('/login', controller.verifyUser, (req,res) => {
    return res.status(200).json(res.locals.id)
}) 
router.post('/entry', controller.createEntry, (req,res) => {
    return res.status(200).json(res.locals.entry)
})


module.exports = router;