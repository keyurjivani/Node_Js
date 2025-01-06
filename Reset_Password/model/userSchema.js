const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: Number,
});

const users = mongoose.model("users", userSchema);
module.exports = users;