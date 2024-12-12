const {Router} = require('express');
const { login, signup, getUser, getUserById, createUser, updateUser, deleteUser } = require('../Controller/User.Controller');

const userRouter = Router();

userRouter.get('/login', login);
userRouter.get('/signup', signup);

userRouter.get('/', getUser);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;

