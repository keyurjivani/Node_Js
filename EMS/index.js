const express = require('express');
const dbconnect = require('./Config/db');
const userRouter = require('./Routes/user.route');
const examRouter = require('./Routes/exam.route');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user",userRouter);
app.use("/exam",examRouter);

const PORT=process.env.PORT ||8090;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});
