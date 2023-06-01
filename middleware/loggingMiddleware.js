// Middleware

/* Task 4.2.1 Create logrequest Middleware */
exports.logRequest = (req, res, next) => {
    console.log(`Middleware 1 is working fine!`);
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
    };
/* Task 4.2.1 */

