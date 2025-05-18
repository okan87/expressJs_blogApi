"use strict";

/* --------------------------------
! EXPRESSJS -BLOGAPI PROJECT
-------------------------------- */
const express = require('express');
const dbConnection = require('./src/dbConnection');
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
require('./src/dbConnection')
dbConnection()
app.use(express.json())
app.all('/',(req,res)=>{
    res.send('Blog Api ')
})
app.use('/blog', require('./src/routes/blogRoute'))
app.use(require('./src/errorHandler'))
app.listen(PORT, () =>
  console.log(`Server is running http://127.0.0.1 + ${PORT}`)
);
