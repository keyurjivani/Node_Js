const { name } = require('ejs');
const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
    name:String,
    email: String,
    password: String

});

const User = mongoose.model('User', User_Schema);
module.exports = User;