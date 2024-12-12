const {Router} = require('express');
const { login, signup, getUser, getUserById, createUser, updateUser, deleteUser } = require('../Controller/User.Controller');

const userRouter = Router();

userRouter.get('/login', login);
userRouter.get('/signup', signup);

userRouter.get('/', getUser);
userRouter.get('/user/:id', getUserById);
userRouter.post('/adduser', createUser);
userRouter.patch('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

module.exports = userRouter;

