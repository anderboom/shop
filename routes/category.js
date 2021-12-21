const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/category');

router.get('/', controller.getAllCategories);
router.get('/:id', controller.getCategoryById);
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.deleteCategoryById
);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    controller.createCategory
);
router.patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    controller.updateCategoryById
);

module.exports = router;