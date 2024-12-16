const FoodSchemaModel = require("../model/food.schema")

const AddFood = async(req, res) =>{
    let {name, price, category, description} = req.body
    let {createBy} = req.userSchemaModel._id

    if(!name || !price || !category || !description){
        return res.status(400).json({error: "All fields are required"})
    }

    let data = await FoodSchemaModel.create(req.body);
    res.status(200).json(data, createBy)

}
module.exports = AddFood