const express = require("express");
const app = express();
const mongoose = require("mongoose");



// Replace with your MongoDB connection URL
const mongoURI = 'mongodb+srv://mohamedtawfik:1234@cluster0.evvreac.mongodb.net/?retryWrites=true&w=majority'; 

mongoose.connect(mongoURI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3306, () => {
        console.log('Server started on port 3306'); 
    });
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const recipeSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    ingredients: [String],
    image: String
});

// Create the Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);

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

// Insert the recipes
Recipe.insertMany(recipes)
    .then(() => {
    console.log('Recipes inserted successfully');});