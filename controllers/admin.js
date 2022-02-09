const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Admin');
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
                keys.jwt, { expiresIn: 120 * 120 }
            );
            res.status(200).json({
                token: `Bearer ${token}`,
            });
        } else {
            res.status(401).json({
                message: 'Неверный логин или пароль',
            });
        }
    } else {
        // пользователь не существует
        res.status(404).json({
            message: 'Пользователь не найден',
        });
    }
};

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
        res.status(409).json({
            message: 'Такой пользователь уже существует',
        });
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
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