const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password:Number,
    email:String,
})
const user =  mongoose.model('User', userSchema);
module.exports = user;