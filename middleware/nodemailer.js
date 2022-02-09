const errorHandler = require('../utils/errorHandler');
const nodemailer = require('nodemailer');
const env = require('../config/keys');

//Nodemailer module
module.exports.sendMailConfim = async function(req, maxOrder) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: env.email,
            pass: env.password,
        },
    });

    const mailOptions = {
        from: env.email,
        to: req.body.userData.email,
        subject: `Замовлення № Z1969${maxOrder + 1}`,
        text: `Дякуємо за замовлення в інтернет магазині MaeteShop. Наш менеджер зв'яжеться з Вами найближчим часом.`,
    };
    try {
        await transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('Error sent email: ', err);
            } else {
                console.log('Email sent');
            }
        });
    } catch (e) {
        errorHandler(e);
    }
};