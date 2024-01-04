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
        // res.json({message: 'username & password loaded', verified: true});
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
    const userVerify = await User.findOne({ username })
    console.log("=> User Name Found:", username);

    if(!userVerify) {
        res.status(500).json({ message: 'username not found' });
        return next();
    }
        
    if(await bcrypt.compare(password, userVerify.password)) {
        res.locals.verify = true;
        res.locals.userId = userVerify._id;
        console.log("=> Password Verified")
        res.json({verified: true});
        return next();
    } else {
        res.status(500).json({ message: 'wrong password' });
        return next();  
    }

    } catch (error) {
        next({ message: 'Could not verify user' });
  }
};

controller.getInfo = async (req,res,next) => {
    const { username } = req.body;
    try{
        const data = await Info.findAll({username: username}) //compete logic for "/homepage" sugar tracking card
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



controller.createEntry = async (req, res, next) => {
    const { username, bloodSugar, sysPressure, diaPressure } = req.body;
    console.log('req.body:', req.body) //works
    try {
        const newEntry = new Info({
            username,
            bloodSugar,
            sysPressure,
            diaPressure,
        })
        await newEntry.save();
        console.log("Entry created")
        res.locals.entry = newEntry._id;
        console.log("res.locals.entry: ", res.locals.entry)
        // res.json({message:'entry created', verified: true})
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