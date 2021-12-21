const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controllers/order');

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.getAllOrders
);
router.post('/', controller.create);
router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.getOrderById
);
router.patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.updateOrderById
);
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.deleteOrder
);

module.exports = router;