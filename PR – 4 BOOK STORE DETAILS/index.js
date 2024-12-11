require('dotenv').config();
const express = require('express');
const DB = require('./Config/DB');
const BookRoute = require('./Routes/Book.Route');
const app = express();
app.use(express.json());
app.use("/", BookRoute)


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    DB();
})