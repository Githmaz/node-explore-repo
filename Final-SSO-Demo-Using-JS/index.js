const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const rootRouter = require('./src/routes/rootRouter');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure express-session middleware
app.use(session({
    secret: 'aaaaaaa',
    resave: false,
    saveUninitialized: false
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Router
app.use("/", rootRouter); 

// Start server
app.listen(port, () => {
    console.log(`Application started on port: ${port}`);
});
