const mongoose = require('mongoose');

const foodschema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchemaModel',
      }
})

const FoodSchemaModel = new mongoose.model("food", foodschema)

module.exports = FoodSchemaModel;