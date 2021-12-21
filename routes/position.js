const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const router = express.Router();
const controller = require('../controllers/position');

router.get('/:categoryId', controller.getAllPositionsByCategoryId);
router.get('/', controller.getAllPositions);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    upload.single('image'),
    controller.createPosition
);
router.patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    upload.single('image'),
    controller.updatePosition
);
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    upload.single('image'),
    controller.deletePosition
);

module.exports = router;