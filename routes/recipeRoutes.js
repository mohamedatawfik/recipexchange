// Recipe Routes
const express = require('express');

/* Task 1.1: Create Router */
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const checkAuth = require('../middleware/checkauthMiddleware');

/* Task 3.2.4 Use Check Authentication Middlware*/
router.get('/recipes/:id', checkAuth.checkAuth, recipeController.getRecipeById);
/* Task 3.2.4: End */

/* Task 1.1: End */

// All Recipes route
router.get('/', checkAuth.checkAuth, recipeController.getRecipes);
// Login user route
router.post('/login', recipeController.loginUser);

// Route for logout
router.get('/logout', recipeController.logout);

module.exports = router;
