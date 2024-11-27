const mongoose = require('mongoose');
require("dotenv").config()
const URL = process.env.DB_URL;
const DB = async() =>{
   try {
     await mongoose.connect(URL)
     console.log("Connected to database");
     
   } catch (error) {
     console.error('Failed to connect to MongoDB', error);
   }
}

module.exports = DB;