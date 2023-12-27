const fs = require("fs");

let log = (message) => {
    // console.log(fs);
    
    const options = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    };
    
    const dateTime = new Date().toLocaleString('en-US', options);

    fs.appendFile("data.log",`${message} - ${dateTime}\n`,(error)=>{ // this fuciton is a call back functions (error) => {}
        if(error) console.log(error);
    })

    return "Data has Saved !!!"

}




let logRead = () => {
    fs.readFile("data.log","utf8",(error,data)=>{ // this fuciton is a call back functions (error) => {}
        if(error) console.log(error);
        console.log(data);
    })
}
module.exports.write = log;
module.exports.read = logRead;


//__________________ about call back functions ________________ //

// Callback functions in JS handle async tasks, enabling continuous code execution.
// They facilitate error handling, customizing responses to success or failure.
// This promotes modularity, enhancing code flexibility and readability.
