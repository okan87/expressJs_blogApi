"use strict";
const router = require("express").Router()
const BlogController = require('../controllers/blogController')
router.route('/post')
    .get(BlogController.list)
    .post(BlogController.create)
router.route('/post/:postId')
    .get(BlogController.read)
    .put(BlogController.update)
    .delete(BlogController.delete)
module.exports = router