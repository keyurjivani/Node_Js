const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

app.use("/products", ProductRoute);
app.get("/", (req,res)=>{
    console.log("Welcome To Node!");
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})