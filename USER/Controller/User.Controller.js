const User = require("../Model/User.Schema");

const index = (req, res) => {
    res.render('index');
};
const login = (req, res) => {
    res.render('login',{
        title: 'Login'
    });
};

const signup = (req, res) => {
    res.render('signup');
};

const createUser = async(req, res) => {
   try {
     const {email} = req.body;
     let isExist = await User.findOne({email});
 
     if(!isExist) {
         let userData = await User.create(req.body)
         res.send(userData);
     }
     else {
         res.send("User already exist...");
     }
   } catch (error) {
    
   }
   
     
}

const getUser = async (req, res) => {
    try {
        let userData = await User.find()
        res.send(userData);
    } catch (error) {
        console.error(error);
    }
}

const getUserById = async (req, res) => {
    try {
        let {id} = req.params.id;
        let userData = await User.find(id);
        res.send(userData);
    } catch (error) {
        console.error(error);
    }
}

const updateUser = async (req, res) => {
    try {
        let {id} = req.params.id;
        let userData = await User.find(id, req.body, {new: true});
        res.send(userData);
    } catch (error) {
        console.error(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        let {id} = req.params.id;
        let userData = await User.findByIdAndDelete(id);
        res.send(userData);
    } catch (error) {
        console.error(error);
    }
}

const loginUser=async(req,res)=>{
    const {email ,password}=req.body;
    let isExist= await User.findOne({email:email});
  
    if(!isExist){
      return res.send("User not found...");
    }
  
    if(isExist.password!=password){
      return res.send("Invalid password...");
    }
    return res.send("Loggd In...");
  };

module.exports = {
    index,
    login,
    signup,
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
 };
