const mongoose = require('mongoose');

const connection = async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017/Food");
    console.log("Connected to Database");
}
module.exports = connection;