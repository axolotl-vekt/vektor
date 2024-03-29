const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  username: {type: String, required: true},
  date: { type: Date, default: Date.now },
  bloodSugar: { type: Number },
  fasting: {type: Boolean},
  sysPressure: { type: Number },
  diaPressure: {type: Number},
});
//can't have two 'User' --> there was one in userModel -EW
// module.exports = mongoose.model('User', userSchema);

module.exports = mongoose.model('Info', infoSchema)