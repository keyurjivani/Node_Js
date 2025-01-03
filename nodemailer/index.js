const express = require('express')
require ('dotenv').config()
const path = require('path')
const router = require('./router/user.router')

const dbconnect = require('./config/db')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.set('view engine', 'ejs')
app.set("views",path.join(__dirname,"views"))




app.use(router)
let port=process.env.PORT

app.listen(port,()=>{
    console.log('Server is running on port',port)
    dbconnect()
})



