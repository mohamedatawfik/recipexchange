// Recipe Routes

const express = require('express');
/* Task 1.1: Create Router */
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const checkAuth = require('../middleware/checkauthMiddleware');

router.get('/recipes/:id', checkAuth.checkAuth, recipeController.getRecipeById);
/* Task 1.1: End */

router.get('/', checkAuth.checkAuth, recipeController.getRecipes);
// Login user route
router.post('/login', recipeController.loginUser);

// Route for logout
router.get('/logout', recipeController.logout);
// router.post('/recipes', recipeController.getNewRecipeForm);

module.exports = router;
