const { Session, User, Info} = require('../models/dataModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const controller = {};

controller.createUser = async (req, res, next) => {
    const { username, password, firstName, lastName } = req.body
    
    if (!username || !password || !firstName || !lastName) {
        return next({
            log: '=> ERROR - Username/Password Missing',
            status: 500,
            message: {error:  'User not created'},
        });
    };
    
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = new User({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: hashedPassword
        });

        console.log("newUser Schema: ", user)

        await user.save();
        console.log('=> User Created');

        res.locals.userId = user._id;
        res.json({message: 'username & password loaded', verified: true});
        return next();
    } 
    
    catch (error) { return next({
        log: '=> ERROR - Exited Early - Create User Error',
        status: 500,
        message: {error:'Username unavailable'},
    })
    }
}

controller.verifyUser = async (req, res, next) => {
    const { username, password } = req.body

    try {
        const userConfirmed = await User.findOne({ username })
        console.log("=> User Name Found:", username);

        if (userConfirmed) {
            const passwordMatch = await bcrypt.compare(password, userConfirmed.password)
            console.log("=> Password Found:", username);
        if (passwordMatch){
            res.locals.id = userConfirmed._id; //do not change - Mongoose
            return next();
            }
        } //else statement for err handle username & password

    } catch (error) {
        next({ message: 'Could not verify user' });
    }
}

controller.getInfo = async (req,res,next) => {
    try{
        const data = await Info.find({}) //compete logic for "/homepage" sugar tracking card
        if (data) {
            res.locals.data = data;
            return next();
        }
    } catch (error) {
        return next({
            log: 'Error in getInfo middleware',
            status: 500,
            message: {error: 'Error getting info'}
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
    const { username, bloodSugar, sysPressure, diaPressure } = req.body;

    try {
        const newEntry = await Info.create({
            username,
            bloodSugar,
            sysPressure,
            diaPressure,
        })
        console.log('created entry')
        res.locals.entry = newEntry._id;
        return next();
    } catch (error) { 
        return next({
            log: 'Error in createEntry middleware',
            status: 500,
            message: {error: 'Error in creating entry'}
        })
    }
}

controller.deleteEntry = async (req, res, next) => {
    const { id } = req.params;
    console.log(req.params)
    try {
        await Info.findOneAndDelete({_id:id})
        return next();
    }
    catch(error){
        return next({
            log: 'Error in deleteEntry middleware',
            status: 500,
            message: {error: 'Error deleting entry'}
        })
    }
}

//Not done yet, for the updateEntry
controller.updateEntry = async (req, res, next) => {
    const { bloodSugar, sysPressure, diaPressure, id } = req.body;
    try {
        await Info.updateOne({_id:id},{bloodSugar, sysPressure, diaPressure})
        return next();
    }
    catch(error) {
        return next({
            log: 'Error in updateEntry middleware',
            status: 500,
            message: {error: 'Error updating entry'}
        })
    }
}

module.exports = controller;