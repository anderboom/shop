const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    orderNumber: {
        type: Number,
        required: false,
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
    totalCost: {
        type: Number,
        required: true,
    },
    delivery: {
        payment: {
            type: String,
        },
        deliveryName: {
            type: String,
        },
        area: {
            type: String,
        },
        city: {
            type: String,
        },
        department: {
            type: String,
        },
    },
    userData: {
        firstName: {
            type: String,
        },
        secondName: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        email: {
            type: String,
            required: false,
        },
        comment: {
            type: String,
            required: false,
        },
    },
    cart: [{
        name: {
            type: String,
            required: true,
        },
        groupPages: {
            type: String,
            required: true,
        },
        orderQuantity: {
            type: Number,
            required: true,
        },
        cost: {
            type: Number,
            required: false,
        },
        promoCost: {
            type: Number,
            required: false,
        },
    }, ],
});

module.exports = mongoose.model('orders', orderSchema);