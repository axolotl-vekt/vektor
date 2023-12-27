const Entry = require('../models/entryModel');
const Session = require('../models/sessionModel');
const User = require('../models/userModel');

const controller = {};

controller.createUser = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return next({
            log: 'Error in createUser middleware',
            status: 400,
            error: 'Error in creating user, please follow rules for username and password'
        })
    }
    try {
        const newUser = await User.create({
            username: username,
            password: password,
        })
        console.log('got the newUser')
        res.locals.newUser = newUser._id;
        return next();
    } catch (error) { return next({
        log: 'Error in createUser middleware',
            status: 500,
            error: 'Error in creating user'
        })
    }
}

// controller.getUser = (req, res, next) => {
//     const { username, password } = req.body
//     try {
//         const userConfirmed = await User.findOne({ username, password })
//         if (userConfirmed) {
//             userConfirmed
//         }
//     }
// }

controller.createEntry = async (req, res, next) => {
    const { bloodSugar, bloodPressure } = req.body
    try {
        const newEntry = await Info.create({
            bloodSugar,
            bloodPressure,
        })
        console.log('created entry')
        res.locals.entry = newEntry._id;
        return next();
    } catch (error) { return next({
        log: 'Error in createUser middleware',
            status: 500,
            error: 'Error in creating user'
        })
    }

}

module.exports = controller;