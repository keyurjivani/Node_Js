const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
    name:String,
    number:Number,
    course:String
})

const Student = mongoose.model('Student', studentschema);
module.exports = Student


