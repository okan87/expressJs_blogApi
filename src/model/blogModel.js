"use strict"
const mongoose = require('mongoose')
// https://mongoosejs.com/docs/models.html
const blogPostSchema = new mongoose.Schema({
    // blogCategoryId: {
    //     type: mongoose.Schema.ObjectId, // Relational ObjectId
    //     ref: 'BlogCategory', // ModelName
    //     required: true,
    // },
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    published: {
        type: Boolean,
        default: true
    },
    // createdAt
    // updatedAt

}, { collection: 'blogPosts', timestamps: true })

module.exports = mongoose.model('BlogPost', blogPostSchema)