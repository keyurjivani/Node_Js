const {Router} = require('express');
const { getUser, signup, login, Delete } = require('../controller/user.controller');

const userRouter = Router();

userRouter.get('/',getUser);
userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.delete('/delete/:id',Delete);

module.exports = userRouter;

