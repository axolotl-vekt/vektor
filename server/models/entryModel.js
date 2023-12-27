const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  date: { type: Date, default: Date.now },
  bloodSugar: { type: Number },
  bloodPressure: { type: String },
  beforeMeal: { type: Boolean },
});
//can't have two 'User' --> there was one in userModel -EW
// module.exports = mongoose.model('User', userSchema);

module.exports = mongoose.model('Info', infoSchema)