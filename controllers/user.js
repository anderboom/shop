const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({ email: req.body.email });

    if (candidate) {
        //проверка пароля
        const passwordResult = bcrypt.compareSync(
            req.body.password,
            candidate.password
        );
        if (passwordResult) {
            // генерируем токен, пароли совпали
            const token = jwt.sign({
                    email: candidate.email,
                    userId: candidate._id,
                },
                keys.jwt, { expiresIn: 30 * 60 }
            );
            res.status(200).json({
                token: `Bearer ${token}`,
            });
        } else {
            res.status(401).json({
                message: 'Невірна пошта або пароль',
            });
        }
    } else {
        // пользователь не существует
        res.status(404).json({
            message: 'Користувач не знайдений',
        });
    }
};

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
        res.status(409).json({
            message: 'Користувач з такою поштою вже існує',
        });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            firstName: req.body.firstName,
            secondName: req.body.secondName,
            phoneNumber: req.body.phoneNumber,
            deliveryName: req.body.deliveryName,
            area: req.body.area,
            city: req.body.city,
            department: req.body.department,
        });

        try {
            await user.save();
            res.status(201).json(user);
        } catch (e) {
            // ошибка регистрации
            errorHandler(res, e);
        }
    }
};

module.exports.getUsers = async function(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        errorHandler(res, e);
    }
};
module.exports.updateProfile = async function(req, res) {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.status(200).json(user);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.deleteUser = async function(req, res) {
    try {
        const order = await User.findOne({ _id: req.params.id });

        await User.deleteOne({ _id: req.params.id });
        res.status(200).json({
            message: 'Пользователь удалён!',
        });
    } catch (e) {
        errorHandler(res, e);
    }
};