import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../../../config';
import validateLoginInput from '../../../validation/login';
import { addNewUser } from '../../../src/controllers/UserController';
import User from '../../../src/models/UserModel';

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ usernamenotfound: 'Username not found' });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT payload
        const payload = {
          id: user.id,
          name: user.name,
        };
        // Sign token
        jwt.sign(
          payload,
          config.secretOrKey,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          },
        );
      } else {
        return res.status(400).json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});

export default loginRouter;
