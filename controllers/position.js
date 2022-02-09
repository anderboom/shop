const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');
const fs = require('fs');

module.exports.createPosition = async function(req, res) {
    const position = new Position({
        name: req.body.name,
        cost: req.body.cost,
        category: req.body.category,
        description: req.body.description,
        quantity: req.body.quantity,
        inputCost: req.body.inputCost,
        promoCost: req.body.promoCost,
        brand: req.body.brand,
        imageSrc: req.file ? req.file.path : '',
        groupPages: req.body.groupPages,
    });
    try {
        await position.save();
        res.status(201).json(position);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.getAllPositions = async function(req, res) {
    try {
        const positions = await Position.find();
        res.status(200).json(positions);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.getAllPositionsByCategoryId = async function(req, res) {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
        });
        res.status(200).json(positions);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updatePosition = async function(req, res) {
    try {
        const position = await Position.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.status(200).json(position);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.deletePosition = async function(req, res) {
    try {
        const position = await Position.findOne({ _id: req.params.id });
        if (position.imageSrc) {
            fs.unlink(`./${position.imageSrc}`, function(err) {
                if (err) {
                    console.error(err);
                }
            });
        }

        await Position.deleteOne({ _id: req.params.id });
        res.status(200).json({
            message: 'Позиция удалена',
        });
    } catch (e) {
        errorHandler(res, e);
    }
};