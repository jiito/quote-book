import express from 'express';
import loginRouter from './loginRouter';
import registerRouter from './registerRouter';
import { getAllUsers } from '../../../src/controllers/UserController';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.use('/login', loginRouter);
userRouter.use('/register', registerRouter);

export default userRouter;
