const sum = require("./service/Calservice");
const logger = require("./service/Logger")
const os = require('os')

 main = () => {
    console.log("run..........",sum);
    console.log("",sum.devide(8,2),"",sum.sum(2,2,2,2,2,2,2,2,2,2,2,2))
    console.log(__filename);
    console.log("\n\n..............")
    console.log(logger("Data 10101001"));

}

main();



//__________________ about call back functions ________________ //

// Callback functions in JS handle async tasks, enabling continuous code execution.
// They facilitate error handling, customizing responses to success or failure.
// This promotes modularity, enhancing code flexibility and readability.
