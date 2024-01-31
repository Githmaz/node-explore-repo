const express = require("express");
const cors = require('cors');
const bodyparser = require('body-parser')
const rootRouter = require('./src/routes/rootRouter')
const app = express();
const port = 4000;
const session = require('express-session');
const passport = require('passport');

app.use(cors());


app.use(bodyparser.json());

app.use("/",rootRouter); 

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port,()=>{
    console.log(`Application started on port : ${port} `)
})