// Middleware

/* Task 3.2.2 Create Check Authentication Middleware */
exports.checkAuth = (req, res, next) => {
    if (req.session.user) {
        console.log('Middleware 2 is working fine!');
        console.log('User checked for auth, pass to next middleware!');        
        next(); // User is logged in, proceed to the next middleware or route handler
    } else {
        res.send("Unauthorized User");
    }
};
/* Task 3.2.2 End */