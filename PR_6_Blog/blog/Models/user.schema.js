const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    role: {
      type: String,
      enum: ["user", "admin"], // Define allowed roles
      default: "user", // Default role is 'user'
    }
})

const User = new mongoose.model("User", UserSchema);
module.exports = User;