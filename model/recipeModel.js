const express = require("express");
const app = express();
const mongoose = require("mongoose");

/* Task 2: Create CounterSchema */
const recipeSchema = new mongoose.Schema({
    name: String,
    email: String
});
  

const RecipeModel = mongoose.model('Recipe', recipeSchema);
/* Task 2: End */
  

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
  

RecipeModel.countDocuments()
  .then(count => {
    if (count === 0) {
      return RecipeModel.insertMany(recipes);
    }
    return Promise.resolve(); // Resolve the promise if users already exist
  })
  .then(() => {
    console.log('Recipes inserted successfully.');
  })
  .catch(err => {
    console.log(err);
  });


module.exports = RecipeModel;