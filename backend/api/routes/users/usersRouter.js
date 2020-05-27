import express from 'express';
import loginRouter from './loginRouter';
import registerRouter from './registerRouter';
import { getAllUsers, deleteUserById, findUserById } from '../../../src/controllers/UserController';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:UserId', findUserById);
userRouter.delete('/', deleteUserById);

userRouter.use('/login', loginRouter);
userRouter.use('/register', registerRouter);

export default userRouter;
