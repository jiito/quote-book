import express from 'express';
import loginRouter from './loginRouter';
import registerRouter from './registerRouter';

const userRouter = express.Router();

userRouter.use('/login', loginRouter);
userRouter.use('/register', registerRouter);

export default userRouter;
