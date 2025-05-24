"use strict";
const mongoose = require("mongoose");
const hashPassword = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    /*
    {
      "email": "a1@a.com",
      "password": "123456789",
      "firstName": "a1",
      "lastName": "z1"
    }
    */
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email field must be required."],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props) => `${props.value} geçerli bir email adresi değil!`,
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    firstName: String,
    lastName: String,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

// Hash the password before saving it
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await hashPassword(this.password);
    next();
  } catch (err) {
    next(err);
  }
});

// Extract password from JSON output
UserSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model("User", UserSchema);