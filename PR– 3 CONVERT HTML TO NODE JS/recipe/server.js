const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let initialRecipe = [
    {
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish.',
      preparationTime: '15 minutes',
      cookingTime: '15',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      country: "India",
      veg: true,
      id: 1
    }
  ]


app.get('/', (req, res) => {
    res.send('welcome to the recipe api');
});
app.use(express.static(path.join(__dirname)));
app.get('/recipe/all', (req, res) =>{
    res.json(initialRecipe);
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'recipe.html'));
});


app.post('/recipe/add', (req, res) => {
    let { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

    if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || veg === undefined) {
        return res.status(400).send('All fields are required');
    }

    const newRecipe = {
        ...req.body,
        id: initialRecipe.length + 1
    };

    initialRecipe.push(newRecipe);
    res.json(initialRecipe);
});


app.patch('/recipe/update/:id', (req, res) => {
    const { id } = req.params;
    const recipeIndex = initialRecipe.findIndex(recipe => recipe.id == id);

    if (recipeIndex === -1) return res.status(404).send('Recipe not found');

    initialRecipe[recipeIndex] = { ...initialRecipe[recipeIndex], ...req.body };
    res.json(initialRecipe);
});


app.delete('/recipe/delete/:id', (req, res) => {
    const { id } = req.params;
    console.log('Received id:', id);
    console.log('Received body:', req.body);

    const recipeIndex = initialRecipe.findIndex(recipe => recipe.id == id);

    if (recipeIndex === -1) return res.status(404).send('Recipe not found');

    initialRecipe.splice(recipeIndex, 1);
    res.json(initialRecipe);
});

app.get('/recipe/filter', (req, res) => {
    let { veg, sort, country } = req.query;

    let filteredRecipes = [...initialRecipe];

    if (veg !== undefined) {
        veg = veg === 'true';
        filteredRecipes = filteredRecipes.filter(recipe => recipe.veg === veg);
    }

    if (country) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.country === country);
    }

    if (sort === 'lth') {
        filteredRecipes.sort((a, b) => parseInt(a.cookingTime) - parseInt(b.cookingTime));
    } else if (sort === 'htl') {
        filteredRecipes.sort((a, b) => parseInt(b.cookingTime) - parseInt(a.cookingTime));
    }

    res.json(filteredRecipes);
});


app.listen(8090, () => {
    console.log('Server listening on port 8090');
});