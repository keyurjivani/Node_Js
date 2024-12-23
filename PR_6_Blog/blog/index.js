const express = require('express');
const path = require("path");
const connection = require('./config/db');


const app = express();
const Cookies = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const initializer = require('./middleware/Auth');
const User = require('./Models/user.schema');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Cookies());

app.use(session({ secret: "secret-key" }));
app.use(passport.initialize());
app.use(passport.session());

initializer(passport);

app.get('/', (req,res) =>{
    console.log("Blog PR");
})

app.use("/user", User);

app.listen(8090, ()=>{
    console.log("listening on port 8090");
    connection();
})