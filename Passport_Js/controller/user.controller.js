const User = require("../model/user.schema");


const create = async (req, res)=>{
    const { name, email, password } = req.body;
    let isexist = await User.findOne({ email: email})

    if(!isexist){
        return res.send("user already exists");
    }else{
        let hash = await bcrypt.hash(password,10);
        req.body.password = hash;
        let user = new User.create(req.body);
        return res.send(user)
    }
}

const login = async (req, res)=>{
    const { name, email, password } = req.body;
    let isexist = await User.findOne({ email: email});

    if(!isexist){
        return res.send("user not found");
    }

    let match = await bcrypt.compare(password, isexist.password);
    if(match){
        return res.send("login success");
    }else{
         res.send("incorrect password");
    }

    res.cookie('username', isexist.username)
    return res.send("login success");
}

const getuser = async (req, res) => {
    let {id} = req.params.id;
    let user = await User.findById(id);
    return res.send(user)
}

module.exports = {
    create,
    login,
    getuser,
 
}