import { Strategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';
import config from '../config';
import User from './src/models/UserModel';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

const passport = () => {
  passport.use(
    new Strategy(opts, (jwtPayload, done) => {
      User.findById(jwtPayload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.error(err));
    }),
  );
};
