const mongoose = require('mongoose')

const connetion=async()=>{
    await mongoose.connect('mongodb://localhost:27017/nodemail')
    console.log('MongoDB Connected')
}

module.exports=connetion;