const Info = require('../models/entryModel');
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

controller.verifyUser = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const userConfirmed = await User.findOne({ username, password })
        console.log(userConfirmed)
        if (userConfirmed) {
            res.locals.id = userConfirmed._id;
            return next();
        }
    } catch (error) {
        return next({
            log: 'Error in getUser middleware',
            status: 500,
            error: 'Error in getting user'
        })
    }
}

// controller.startSession = async (req, res, next) => {
//     if (res.locals.id == undefined) {
//         return next('Error in startSession Controller: No user id')
//     }

//     const checkForSession = await Session.findOne({ cookieId: res.locals.id });
//     if (checkForSession) return next();

//     Session.create({ cookieId: res.locals.id }, (err, sesionInfo) => {
//         if (err) {
//             return next('Error in startSession Controller: ' + err);
//         };
//         return next();
//     })
// }

// controller.setSSIDCookie = (req, res, next) => {
//     const { username } = req.body;
//     if (!username) {
//         return next('Error in userController.verifyUser')
//     }
//     if (res.locals.id === undefined) {
//         return next('Error in userController.verifyUser: No user id')
//     }
//     res.cookie('ssid', `${res.locals.id}`, { httpOnly: true })
//     return next();
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