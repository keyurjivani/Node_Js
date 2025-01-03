const express = require('express');
const cors = require('cors');
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
app.use(cors());
app.use(cors({ origin: 'http://127.0.0.1:3000' }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRouter)

app.get("/", isLogin, (req, res)=>{
    let {username}=req.cookies;
    res.render("index",{username});
    console.log("Fetch Data To index.js");
});



app.listen(8090, ()=>{
    console.log("Server is running on port 8090");
    DB();
})