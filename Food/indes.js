const express = require('express');
const connection = require('./config/db');
const userRouter = require('./routes/user.route');
const foodRouter = require('./routes/food.route');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello NodeJS!');
});

app.use("/api/users", userRouter);
app.use("/api", foodRouter)
app.listen(8090, ()=>{
    console.log('Server is running on port 8090');
    connection();
});