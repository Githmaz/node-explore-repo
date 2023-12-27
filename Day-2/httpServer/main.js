const http = require("http")
const { json } = require("stream/consumers")

 let server = http.createServer((req,res)=>{
    console.log("yesss")
    if(req.url == "/student"){
        res.write(JSON.stringify({"Name":"Githma","Age":"20"}));
        res.end();
    }
 })

 server.listen(3000)