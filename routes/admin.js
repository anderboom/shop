const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/admin');

router.post('/login', controller.login);
router.post(
    '/register',
    passport.authenticate('jwt', { session: false }),
    controller.register
);

module.exports = router;