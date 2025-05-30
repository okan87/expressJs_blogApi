"use strict";

const { BlogCategory, BlogPost } = require("../model/blogModel");

//! *****************************************
module.exports.BlogCategory = {
  list: async (req, res) => {
    const data = await req.getModelList(BlogCategory);
    const details = await req.getModelListDetails(BlogCategory);
    res.status(200).json({
      error: false,
      count: data.length,
      result: data,
      details,
    });
  },
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);
    res.status(201).json({
      error: false,
      body: req.body,
      result: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogCategory.findById(req.params.categoryId);
    if (!data) {
      return res.status(404).json({ error: true, message: "Category bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(404).json({ error: true, message: "Category bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  },
  delete: async (req, res) => {
    const data = await BlogCategory.findByIdAndDelete(req.params.categoryId);
    if (!data) {
      return res.status(404).json({ error: true, message: "Category bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  }
};
//! *****************************************
module.exports.BlogPost = {
  list: async (req, res) => {
    const data = await req.getModelList(BlogPost);
    const details = await req.getModelListDetails(BlogPost);
    res.status(200).json({
      error: false,
      count: data.length,
      result: data,
      details,
    });
  },
  listInCategory: async (req, res) => {
    const data = await BlogPost.find({ blogCategoryId: req.params.categoryId }).populate('blogCategoryId');
    res.status(200).json({
      error: false,
      count: data.length,
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    res.status(201).json({
      error: false,
      body: req.body,
      result: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogPost.findById(req.params.postId);
    if (!data) {
      return res.status(404).json({ error: true, message: "Blog bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogPost.findByIdAndUpdate(req.params.postId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res.status(404).json({ error: true, message: "Blog bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  },
  delete: async (req, res) => {
    const data = await BlogPost.findByIdAndDelete(req.params.postId);
    if (!data) {
      return res.status(404).json({ error: true, message: "Blog bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  }
};