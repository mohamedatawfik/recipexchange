// Import required modules
const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const app = express();

// Configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const logRequest = require('./middleware/loggingMiddleware');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));

// Import routes
/* Task 1.2: Import recipeRouter */
const recipeRoutes = require('./routes/recipeRoutes');
/* Task 1.2: End */

// Use middleware
/* Task 4.2.2 Use logrequest Middleware */
app.use(logRequest.logRequest);
/* Task 4.2.2 End */

// Use routes
/* Task 1.2 cont. : Use recipeRouter for path '/' and redirect any other path to '/' */
app.use('/route', recipeRoutes);
/* Task 1.2 cont.: End */

// home route
app.get('/', (req, res) =>{
    res.render('login', { title : "RecipeXchange App"});
})

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

