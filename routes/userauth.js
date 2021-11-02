const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controllers/userauth')

router.post('/login', controller.login)
router.post('/register', controller.register)

module.exports = router