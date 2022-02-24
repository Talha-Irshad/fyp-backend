const express = require("express");
const mongoose = require("mongoose");
var cors=require("cors")
const app = express();
const bodyParser= require("body-parser")
require('dotenv/config')

// middleware
app.use(cors())
app.use(bodyParser.json());

//import routes
const postsRoute=require('./routes/posts')
const employeeRoute=require('./routes/employee')
const userRoute=require('./routes/user')
const attentionRoute=require('./routes/attention')

app.use('/posts',postsRoute)

app.use('/employee',employeeRoute)

app.use('/user',userRoute)

app.use('/attention',attentionRoute)
// Routes
app.get('/', (req, res) => {
    res.send('We are at home')
})
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("database connected")
})

const port = process.env.PORT||80
app.listen(port)