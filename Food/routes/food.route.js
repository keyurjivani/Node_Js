const {Router} = require('express');
const AddFood = require('../controller/food.controller');

const foodRouter = Router();

foodRouter.post('/foods', AddFood);

module.exports = foodRouter;