const express = require("express");
const app = express();
const mongoose = require("mongoose");

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