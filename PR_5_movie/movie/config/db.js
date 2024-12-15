const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.URL
const db = async() =>{
    await mongoose.connect("mongodb://localhost:27017/PR5");
    console.log('Connected to MongoDB');
}
module.exports = db;