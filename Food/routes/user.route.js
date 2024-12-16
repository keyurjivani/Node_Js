const {Router} = require('express');
const { signup, login, getAllUsers } = require('../controller/user.controller');

const userRouter = Router();

userRouter.get('/userAll',getAllUsers)
userRouter.post('/signup', signup);
userRouter.post('/login', login);

module.exports = userRouter;