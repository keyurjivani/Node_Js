const mongoose = require('mongoose');

const DB = async() => {
    await mongoose.connect('mongodb://localhost:27017/students')
    console.log("connected to MongoDB");
    
}

module.exports = DB
