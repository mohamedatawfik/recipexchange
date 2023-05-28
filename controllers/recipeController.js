// Recipe Controller

const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Classic Italian pasta dish with meat sauce."
    },
    {
      id: 2,
      title: "Chicken Stir-Fry",
      description: "A quick and easy stir-fry recipe with chicken and vegetables."
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Homemade cookies loaded with chocolate chips."
    }
  ];
  
  exports.getRecipes = (req, res) => {
    res.render('index', { pageTitle: 'Recipes', recipes });
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
  
  