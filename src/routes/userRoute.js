"use strict";
const router = require("express").Router()
const {User} = require('../controllers/userController')
//! ******************
router.route('/')
    .get(User.list)
    .post(User.create)
router.route('/:userId')
    .get(User.read)
    .put(User.update)
    .delete(User.delete)
//! ******************
//login:
router.post('./login', User.login)
module.exports = router