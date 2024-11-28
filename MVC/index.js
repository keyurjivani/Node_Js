const express = require("express");
const DB = require("./Config/db");
const ProductRoute = require("./Route/Products.route");
const app = express();
const path = require("path");
app.use(express.json());
require("dotenv").config();
app.use(express.urlencoded({extended: true}));
app.use("/products", ProductRoute);
// console.log(__dirnames);
app.use("/upload",express.static(path.join(__dirname, "upload")));
app.get("/", (req,res)=>{
    // console.log("Welcome To Node!");
    res.sendFile(path.join(__dirname, "View/Form.html"));
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port ${PORT}`);
    DB();
})