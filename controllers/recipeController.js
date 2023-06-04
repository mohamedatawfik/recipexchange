// Recipe Controller
const dbconnection = require('../model/dbconnection');
const RecipeModel = require('../model/recipeModel');

const credential = {
    email: "johndoe@gmail.com",
    password: "johndoe123"
};

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

// Index Controller using hardcoded recipes
exports.getRecipes = (req, res) => {
res.render('index', { pageTitle: 'Recipes', recipes });
};


// Index Controller using DB retrieved recipes

// exports.getRecipes = (req, res) => {
// try {
// const recipes = await RecipeModel.find({}).exec();
// console.log('List of recipes retrieved from MongoDB')
// res.render('index', { pageTitle: 'Recipes', recipes });
// } catch (err) {
// console.log(err);
// res.send("Error");
// }
// };

/* Task 4.1: Get Recipe */
exports.getRecipeById = async (req, res) => {
    const recipeId = req.params.id;
    try {
      const recipe = await RecipeModel.findOne({ id: parseInt(recipeId) }).exec();
      if (recipe) {
        console.log('List of recipe ingredients retrieved from MongoDB');
        res.render('recipe', { pageTitle: 'Recipe Details', recipe });
      } else {
        res.status(404).send('Recipe not found');
      }
    } catch (err) {
      console.log(err);
      res.send("Error");
    }
};
/* Task 4.1: End */

exports.loginUser = (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect('/route');
    } else {
        res.end('Invalid Username');
    }
};

exports.logout = (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
            res.send('Error');
        } else {
            res.render('login', { title: 'RecipeXchange App', logout: 'Logout Successful...!' });
        }
    });
};