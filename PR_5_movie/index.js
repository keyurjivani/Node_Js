const express = require('express');
const db = require('./movie/Config/db');
const movieRouter = require('./movie/routes/movie.route');
const userRouter = require('./movie/routes/user.route');

const app = express();

app.use(express.json());
app.use('/user', userRouter )
app.use('/movie', movieRouter);

app.get('/', (req, res) => {
    res.send("Welcome to the movie API")
} );

const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT);
    db();
})