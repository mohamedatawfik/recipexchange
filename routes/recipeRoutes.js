// Recipe Routes

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getRecipes);
router.get('/recipes/:id', recipeController.getRecipe);
router.post('/recipes', recipeController.createRecipe);

module.exports = router;
