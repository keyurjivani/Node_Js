const {Router}=require('express');
const { signupUser, loginUser } = require('../Controller/user.controller');

const userRouter=Router();

userRouter.post("/signup",signupUser);
userRouter.post("/login",loginUser);       

module.exports=userRouter;