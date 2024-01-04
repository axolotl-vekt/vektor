const { Session, User, Info } = require('../models/dataModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const controller = {};

/*** Create a new user on "/signup" middleware handles bcrypt***/
controller.createUser = async (req, res, next) => {
  const { username, password, firstName, lastName } = req.body;

  //error handling for missing information at signup
  if (!username || !password || !firstName || !lastName) {
    return next({
      log: '=> ERROR: Username/Password Missing',
      status: 500,
      message: { error: 'User not created' },
    });
  }

  try {
    //password encrypting
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new User in database (User)
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: hashedPassword,
    });
    await user.save();

    console.log('=> User: ', username, ' Created');

    //passing verification using res.json
    res.locals.userId = user._id;
    res.json({ message: 'username & password loaded', verified: true });
    return next();
  } catch (error) {
    //Create User middleware global error catch
    return next({
      log: '=> ERROR: Middleware: createUser global error',
      status: 500,
      message: { error: 'Create User Error' },
    });
  }
};

/*** Verify user info on "/login" middleware handles bcrypt***/
controller.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userVerify = User.findOne({ username });
    const checkUser = await userVerify .then(console.log(userVerify))

    if (!userVerify) {
      res.status(500).json({ message: 'username not found' });
      return next();
    }

    if (await bcrypt.compare(password, userVerify.password)) {
      res.locals.verify = true;
      res.locals.userId = userVerify._id;
      console.log('=> Password Verified');
      res.json({ verified: true });
      return next();
    } else {
      //error handling if password entered does not match database
      res.status(500).json({ message: 'Wrong Password!' });
      return next();
    }
  } catch (error) {
    next({ message: 'Could not verify user' });
  }
};

controller.getInfo = async (req, res, next) => {
  try {
    const data = await Info.find({}); //compete logic for "/homepage" sugar tracking card
    if (data) {
      res.locals.data = data;
      return next();
    }
  } catch (error) {
    return next({
      log: 'Error in getInfo middleware',
      status: 500,
      message: { error: 'Error getting info' },
    });
  }
};

controller.createEntry = async (req, res, next) => {
  const { username, bloodSugar, sysPressure, diaPressure } = req.body;

  try {
    const newEntry = await Info.create({
      username,
      bloodSugar,
      sysPressure,
      diaPressure,
    });
    console.log('created entry');
    res.locals.entry = newEntry._id;
    return next();
  } catch (error) {
    return next({
      log: 'Error in createEntry middleware',
      status: 500,
      message: { error: 'Error in creating entry' },
    });
  }
};

controller.deleteEntry = async (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    await Info.findOneAndDelete({ _id: id });
    return next();
  } catch (error) {
    return next({
      log: 'Error in deleteEntry middleware',
      status: 500,
      message: { error: 'Error deleting entry' },
    });
  }
};

//Not done yet, for the updateEntry
controller.updateEntry = async (req, res, next) => {
  const { bloodSugar, sysPressure, diaPressure, id } = req.body;
  try {
    await Info.updateOne({ _id: id }, { bloodSugar, sysPressure, diaPressure });
    return next();
  } catch (error) {
    return next({
      log: 'Error in updateEntry middleware',
      status: 500,
      message: { error: 'Error updating entry' },
    });
  }
};

module.exports = controller;
