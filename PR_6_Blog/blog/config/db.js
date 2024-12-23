const mongoose = require('mongoose');

const connection = async(req, res) =>{
    await mongoose.connect("mongodb://localhost:27017/PR6");
    console.log("Database connected successfully");
}

module.exports = connection;