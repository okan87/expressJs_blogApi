"use strict";

const BlogPost = require("../model/blogModel");

module.exports = {
  list: async (req, res) => {
    const data = await BlogPost.find();
    res.status(200).json({
      error: false,
      count:data.length,
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    res.status(201).json({
      error: false,
      body:req.body,
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
            result: data
        });
    }
};
