import express from 'express';
import validateLoginInput from '../../../validation/login';
import { addNewUser } from '../../../src/controllers/UserController';

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  addNewUser(req, res);
});

export default loginRouter;
