const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/user');

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get(
    '/register',
    passport.authenticate('jwt', { session: false }),
    controller.getUsers
);
router.patch(
    '/register/:id',
    passport.authenticate('jwt', { session: false }),
    controller.updateProfile
);

router.delete(
    '/register/:id',
    passport.authenticate('jwt', { session: false }),
    controller.deleteUser
);

module.exports = router;