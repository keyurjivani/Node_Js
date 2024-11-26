const mongoose = require('mongoose');

const URL = process.env.DB_URL;
const DB = async() =>{
   try {
     await mongoose.connect(URL)
   } catch (error) {
     console.error('Failed to connect to MongoDB', error);
   }
}

module.exports = DB;