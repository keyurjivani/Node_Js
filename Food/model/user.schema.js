const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username:String,
    email: String,
    password: String,
    role: { type: String, enum: ['admin', 'user'] }
  
})

const userSchemaModel = new mongoose.model("user", schema)
module.exports = userSchemaModel
