const mongoose = require('mongoose');
// const DB_URL = process.env.DB_URL
const DB = async(req, res)=>{
    await mongoose.connect("mongodb://localhost:27017/Pretice");
    console.log('Connected to DB')
}

module.exports = DB;