const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  city: String,
  username: String,
  email: String,
  hashedPassword: String
});

const User = mongoose.model('User', UserSchema);
module.exports = User;