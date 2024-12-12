const express = require('express');
const path = require('path');
const DB = require('./Config/DB');
const userRouter = require('./Routes/User.Router');
const cookies = require('cookie-parser');
const { isLogin } = require('./Middleware/isLogin');
require("dotenv").config();
const app = express();
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", isLogin, (req, res)=>{
    let {username}=req.cookies;
    res.render("index",{username});
    console.log("Fetch Data To index.js");
});


app.use("/user",userRouter)

app.listen(8090, ()=>{
    console.log("Server is running on port 8090");
    DB();
})