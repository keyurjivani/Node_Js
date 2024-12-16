const userSchemaModel = require("../model/user.schema")

const getAllUsers = async(req, res)=>{
    let data = await userSchemaModel.find();
    res.json(data);
}

const signup = async(req, res)=>{
    let {email, password} = req.body;
    let isExists = await userSchemaModel.findOne({email: email});
    if(isExists){
        return res.status(409).json({error: "User already exists"})
    }else{
        let data = await userSchemaModel.create(req.body);
        res.status(201).json(data);
    }
}

const login = async(req, res)=>{
    const { email, password } = req.body;
    let isExists = await userSchemaModel.findOne({ email: email });
    if (!isExists) {
      return res.send("user not found");
    }
    if (isExists.password != password) {
      return res.send("invalid password");
    }
  
    
    return res.send("logged in");
}

module.exports = {getAllUsers,signup, login}