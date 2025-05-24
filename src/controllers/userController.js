"use strict";

const User = require("../model/userModel");

//! *****************************************
module.exports.User = {
  list: async (req, res) => {
    const data = await User.find();
    res.status(200).json({
      error: false,
      count: data.length,
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await User.create(req.body);
    res.status(201).json({
      error: false,
      body: req.body,
      result: data,
    });
  },
  read: async (req, res) => {
    const data = await User.findById(req.params.userId);
    if (!data) {
      return res
        .status(404)
        .json({ error: true, message: "Category bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      return res
        .status(404)
        .json({ error: true, message: "Category bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  },
  delete: async (req, res) => {
    const data = await User.findByIdAndDelete(req.params.userId);
    if (!data) {
      return res
        .status(404)
        .json({ error: true, message: "Category bulunamadi" });
    }
    res.status(200).json({
      error: false,
      result: data,
    });
  },
  login: async (req, res) => {
    /*
This part was worked with session and cookie. I removed it to avoid confusion. In future projects, this part will be done with JWT.
        */
  },
};
//! *****************************************
