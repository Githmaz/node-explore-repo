const fs = require("fs");

let log = (message) => {
    // console.log(fs);
    var time = new Date(Date.now()).toLocaleDateString();
    fs.appendFile("data.log",`${time} - ${message}\n`,(error)=>{ // this fuciton is a call back functions (error) => {}
        if(error) console.log(error);
    })
    return "data has saved"

}

module.exports = log;

//__________________ about call back functions ________________ //

// Callback functions in JS handle async tasks, enabling continuous code execution.
// They facilitate error handling, customizing responses to success or failure.
// This promotes modularity, enhancing code flexibility and readability.
