const mongoose = require('mongoose');

const DB = async() => {
    await mongoose.connect('mongodb://localhost:27017')
    console.log("connected to MongoDB");
    
}

module.exports = DB
