const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;
const DB = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/PR4");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = DB;