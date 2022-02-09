const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');
const fs = require('fs');

module.exports.createCategory = async function(req, res) {
    const category = new Category({
        name: req.body.name,
        user: req.user.id,
    });
    try {
        await category.save();
        res.status(201).json(category);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.getAllCategories = async function(req, res) {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.getCategoryById = async function(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.deleteCategoryById = async function(req, res) {
    try {
        const positions = await Position.find({ category: req.params.id });
        positions.forEach((position) => {
            if (position.imageSrc) {
                fs.unlink(`./${position.imageSrc}`, function(err) {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        });
        await Category.deleteOne({ _id: req.params.id });
        await Position.remove({ category: req.params.id });
        res.status(200).json({
            message: 'Категория удалена.',
        });
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateCategoryById = async function(req, res) {
    const updated = {
        name: req.body.name,
    };
    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, { $set: updated }, { new: true });
        res.status(200).json(category);
    } catch (e) {
        errorHandler(res, e);
    }
};