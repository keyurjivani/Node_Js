const express = require('express');
require ('dotenv').config()
const path = require('path')

const connetion = require('./config/db');

const router = require('./routes/userRoute');
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true}))

app.set('view engine', 'ejs')
app.set("views",path.join(__dirname,"views"))


app.use("/user", router)
app.listen(8090, ()=>{
    console.log('Server is running on port 8090');
    connetion();

})