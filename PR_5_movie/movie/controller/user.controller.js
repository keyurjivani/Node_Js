const user = require("../Models/user.schema");


const signup = async(req, res)=>{
    let {email, password} = req.body;
    let isExist = await user.find({email: email});

    if(!isExist){
        let user = await user.create(req.body);
        res.status(201).json(user)
    }else{
        res.status(400).send("Email already exists")
    }

    res.cookie("email", isExist.email)
    return res.send("signup successful");
}

const login = async(req, res)=>{
    let {username, password} = req.body;
    let isExist = await user.findOne({username: username});

    if(!isExist){
        res.status(401).json({error:"Invalid username"})
    }
    
    if(isExist.password != password){
        res.status(401).json({error:"Invalid password"})
    }

    res.json({message: 'Logged in successfully'})

    res.cookie("usernam", isExist.username)
    return res.send("logged in successfully");
}

const Delete = async(req, res) => {
    let {id} = req.body.id;
    let user = await user.findByIdAndDelete(id);
    res.status(201).json(user);
};

const getUser = async(req, res) => {
    let user = await user.find();
    res.status(201).json(user);
}

module.exports = {signup, login, Delete, getUser};