const mongoose = require('mongoose');



const dbconnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/ems");
    console.log("Database connection");
};

module.exports=dbconnect;