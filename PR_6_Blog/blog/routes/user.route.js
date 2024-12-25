const { Router } = require('express');
const { Signup, login, getLoginPage } = require('../controller/user.controller');

const userRouter = Router();

userRouter.post('/signup', Signup)
userRouter.post('/login', login)
userRouter.get('/', getLoginPage)


module.exports = userRouter;