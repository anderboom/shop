const Order = require('../models/Order')
const errorHandler = require('../utils/errorHandler')

// (get) localhost:5000/api/order?offset=2&limit=5
module.exports.getAllOrders = async function(req, res) {
    const query = {
        user: req.user.id
    }

    if (req.query.start) {
        query.date = {
            $gte: req.query.start
        }
    }
    if (req.query.end) {
        if (!query.date) {
            query.date = {}
        }
        query.date['$lte'] = req.query.end
    }
    if (req.query.order) {
        query.order = +req.query.order
    }

    try {
        const orders = await Order.find(query)
            .sort({ date: -1 })
            .skip(+req.query.offset)
            .limit(+req.query.limit)
        res.status(200).json(orders)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getOrderById = async function(req, res) {

}

module.exports.updateOrderById = async function(req, res) {

}