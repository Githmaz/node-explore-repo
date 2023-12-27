const logger = require("./service/Logger")
const os = require('os')
const path = require('path')


const main = () => {
    
    console.log("\nRun..........\n\n",logger);
 
    console.log(logger.write("Day and Time : "));
    
    logger.read();

    console.log("\nEnd............")

}

main();



//__________________ about call back functions ________________ //

// Callback functions in JS handle async tasks, enabling continuous code execution.
// They facilitate error handling, customizing responses to success or failure.
// This promotes modularity, enhancing code flexibility and readability.
