const Order = require('../models/Order');
const errorHandler = require('../utils/errorHandler');
const nodemailer = require('nodemailer');
const env = require('../config/keys');
const sendMail = require('../middleware/nodemailer');

// (get) localhost:5000/api/order?offset=2&limit=5
module.exports.getAllOrders = async function(req, res) {
    // const query = {
    //     user: req.user.id,
    // };

    // if (req.query.start) {
    //     query.date = {
    //         $gte: req.query.start,
    //     };
    // }
    // if (req.query.end) {
    //     if (!query.date) {
    //         query.date = {};
    //     }
    //     query.date['$lte'] = req.query.end;
    // }
    // if (req.query.order) {
    //     query.order = +req.query.order;
    // }

    try {
        const orders = await Order.find();
        // .sort({ date: -1 })
        // .skip(+req.query.offset)
        // .limit(+req.query.limit);
        res.status(200).json(orders);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async function(req, res) {
    try {
        const lastOrder = await Order.findOne({}).sort({
            _id: -1,
        });

        const maxOrder = lastOrder ? lastOrder.order : 0;
        const order = await new Order({
            cart: req.body.cart,
            totalCost: req.body.totalCost,
            delivery: req.body.delivery,
            userData: req.body.userData,
            order: maxOrder + 1,
        }).save();
        res.status(201).json(order);
        sendMail.sendMailConfim(req, maxOrder);
    } catch (e) {
        errorHeandler(res, e);
    }
};

module.exports.getOrderById = async function(req, res) {};

module.exports.updateOrderById = async function(req, res) {
    try {
        const order = await Order.findByIdAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true });
        res.status(200).json(order);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.deleteOrder = async function(req, res) {
    try {
        const order = await Order.findOne({ _id: req.params.id });

        await Order.deleteOne({ _id: req.params.id });
        res.status(200).json({
            message: 'Заказ удалён',
        });
    } catch (e) {
        errorHandler(res, e);
    }
};