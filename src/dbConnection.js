"use strict";

const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("* DB Connected *");
    } catch (err) {
        console.error("* DB Not Connected *", err.message);
        process.exit(1); 
    }
};

module.exports = dbConnection;