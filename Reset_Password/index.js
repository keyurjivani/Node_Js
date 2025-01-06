const express = require('express');
const connection = require('./config/db');
const userRouter = require('./routes/userRoute');
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.use('/users', userRouter)
app.listen(8090, ()=>{
    console.log('Server started on port 8090');
    connection();
})
