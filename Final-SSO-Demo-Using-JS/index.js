const express = require("express");
const cors = require('cors');
const bodyparser = require('body-parser')
const rootRouter = require('./src/routes/rootRouter')
const app = express();
const port = 4000;


app.use(cors());


app.use(bodyparser.json());

app.use("/",rootRouter); 

app.listen(port,()=>{
    console.log(`Application started on port : ${port} `)
})