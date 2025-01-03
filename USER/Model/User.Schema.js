
const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
    username:String,
    email: String,
    password: String

});

const User = mongoose.model('User', User_Schema);
module.exports = User;