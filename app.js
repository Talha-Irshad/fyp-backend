const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser= require("body-parser")
require('dotenv/config')

// middleware
app.use(bodyParser.json());

//import routes
const postsRoute=require('./routes/posts')
const employeeRoute=require('./routes/employee')

app.use('/posts',postsRoute)

app.use('/employee',employeeRoute)
// Routes
app.get('/', (req, res) => {
    res.send('We are at home')
})
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("database connected")
})

const port = 3000
app.listen(port)