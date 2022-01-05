const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const UserAuth = mongoose.model('usersauth');
const keys = require('../config/keys');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt,
};
module.exports = (passport) => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            try {
                UserAuth.findOne({ id: jwt_payload.sub }, (err, user) => {
                    if (err) {
                        return done(err, false);
                    }
                    if (user) {
                        return done(null, user);
                    } else {
                        User.findOne({ id: jwt_payload.sub }, (err, admin) => {
                            if (err) {
                                return done(err, null);
                            }
                            if (admin) {
                                return done(null, admin);
                            } else {
                                return done(null, false);
                            }
                        });
                    }
                });
            } catch (e) {
                console.log(e);
            }
        })
    );
};