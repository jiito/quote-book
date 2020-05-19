import express from 'express';
import validateRegisterInput from '../../../validation/register';
import { addNewUser } from '../../../src/controllers/UserController';

const registerRouter = express.Router();

registerRouter.post('/', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  addNewUser(req, res);
});

export default registerRouter;
