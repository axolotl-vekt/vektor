const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  date: { type: Date, default: Date.now },
  bloodSugar: { type: Number },
  bloodPressure: { type: String },
  beforeMeal: { type: Boolean },
});

module.exports = mongoose.model('User', userSchema);