const passport = require('passport');
const {route} = require('express');
const { getuser, create } = require('../controller/user.controller');


const userRouter = route();

userRouter.get('/', getuser);
userRouter.post('/signup', create);

userRouter.post('/', passport.authenticate("local"), (req,res)=>{
    res.json({message: "login success"})
})

module.exports = userRouter;