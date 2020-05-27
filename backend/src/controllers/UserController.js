import bcrypt from 'bcryptjs';
import User from '../models/UserModel';

/**
 * Checks if a user exists based off their email and then adds if not
 * @param {*} req
 * @param {*} res
 */
export const addNewUser = (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      return res.status(400).json({ username: 'Username already exists' });
    }
  });
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.error(err));
      });
    });
  });
};

export const getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

export const findUserById = (req, res) => {
  User.findById(req.params.UserId, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

export const deleteUserById = (req, res) => {
  User.deleteOne({ _id: req.body.UserId }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};
