const sum = require("./service/Calservice");

main = () => {
    console.log("\nRun..........\n\n",sum);

    console.log("",sum.devide(8,2),"",sum.sum(2,2,2,2,2,2,2,2,2,2,2,2))
    console.log("file name :- ",__filename);

    console.log("\nEnd............")

}

main();



//__________________ about call back functions ________________ //

// Callback functions in JS handle async tasks, enabling continuous code execution.
// They facilitate error handling, customizing responses to success or failure.
// This promotes modularity, enhancing code flexibility and readability.
