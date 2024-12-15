const {Router} = require("express");
const {movieCreate, movieUpdate, movieDelete, rating, comment, filter, Allmovie} = require("../controller/movie.controller");

const movieRouter = Router();

movieRouter.get("/",Allmovie)
movieRouter.post('/create',movieCreate);
movieRouter.patch('/update/:id', movieUpdate);
movieRouter.delete('/delete/:id', movieDelete);
movieRouter.patch('/rating/:id',rating);
movieRouter.patch('/comment/:id', comment);
movieRouter.get('/filter',filter)

module.exports = movieRouter;