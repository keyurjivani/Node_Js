const mongoose = require('mongoose');

const connection = async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017/password");
    console.log("Connected to MongoDB");
}
module.exports = connection;