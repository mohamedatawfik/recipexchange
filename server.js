// Import required modules
const express = require('express');
const app = express();

// Configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const { logRequest } = require('./middleware/loggingMiddleware');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Import routes
const recipeRoutes = require('./routes/recipeRoutes');

// Use middleware
app.use(logRequest);

// Use routes
app.use('/', recipeRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

