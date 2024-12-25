const express = require('express');
const path = require("path");
const connection = require('./config/db');


const app = express();
const Cookies = require("cookie-parser");

const User = require('./Models/user.schema');
const blogRouter = require('./routes/blog.route');
const userRouter = require('./routes/user.route');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Cookies());



app.get('/', (req,res) =>{
    console.log("Blog PR");
})

app.use("/user", userRouter);
app.use("/blog", blogRouter)

app.listen(8090, ()=>{
    console.log("listening on port 8090");
    connection();
})