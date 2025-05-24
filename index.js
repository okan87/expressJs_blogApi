"use strict";

/* --------------------------------
! EXPRESSJS - BLOGAPI PROJECT
-------------------------------- */
require('dotenv').config();
require('express-async-errors');

const express = require('express');
const dbConnection = require('./src/dbConnection');
const errorHandler = require('./src/errorHandler');
const app = express();
const PORT = process.env.PORT || 8000;

// JSON parser middleware
app.use(express.json());

// Root endpoint
app.all('/', (req, res) => {
    res.send('Blog Api');
});

// Blog routes
app.use('/user', require('./src/routes/userRoute'))
app.use('/blog', require('./src/routes/blogRoute'));

//
// Centralized error handler (should be last middleware)
app.use(errorHandler);

// Synchronization:
// require('./src/sync')()

// Connect to DB and start server
dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running http://127.0.0.1:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to DB:", err.message);
        process.exit(1);
    });

