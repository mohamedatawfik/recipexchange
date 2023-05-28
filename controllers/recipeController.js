// Recipe Controller

const recipes = [
{
    id: 1,
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta dish with meat sauce.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic", "Herbs", "Parmesan Cheese"],
    image: "recipe-1.jpeg"
},
{
    id: 2,
    title: "Chicken Stir-Fry",
    description: "A quick and easy stir-fry recipe with chicken and vegetables.",
    ingredients: ["Chicken Breast", "Bell Peppers", "Broccoli", "Soy Sauce", "Garlic", "Ginger", "Rice"],
    image: "recipe-2.jpeg"
},
{
    id: 3,
    title: "Chocolate Chip Cookies",
    description: "Homemade cookies loaded with chocolate chips.",
    ingredients: ["Butter", "Sugar", "Egg", "Flour", "Chocolate Chips", "Vanilla Extract"],
    image: "recipe-3.jpeg"
}
];

exports.getRecipes = (req, res) => {
res.render('index', { pageTitle: 'Recipes', recipes });
};

exports.getNewRecipeForm = (req, res) => {
res.render('new-recipe', { pageTitle: 'Create New Recipe' });
};

exports.getRecipe = (req, res) => {
const recipeId = req.params.id;
// Logic to find the recipe by ID from the hardcoded data array
const recipe = recipes.find(recipe => recipe.id === Number(recipeId));
res.render('recipe', { pageTitle: 'Recipe Details', recipe });
};

exports.createRecipe = (req, res) => {
// Logic to create a new recipe
res.redirect('/');
};

exports.createRecipe = (req, res) => {
// Retrieve the form data
const { title, description, ingredients } = req.body;
const image = req.file.filename; // Get the filename of the uploaded image

// Generate a new recipe ID
const newRecipeId = recipes.length + 1;

// Create a new recipe object
const newRecipe = {
    id: newRecipeId,
    title,
    description,
    ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
    image
};

// Add the new recipe to the recipes array
recipes.push(newRecipe);

res.redirect('/');
};