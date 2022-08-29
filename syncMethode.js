const fs = require("fs");

//Synchronous methode of reading a file (file would be read before moving to next piece of code)
// 1. file to read from
// 2. character enconding
const readMe = fs.readFileSync("./readme.txt", "utf-8");
// show ouput in console
console.log(readMe);

//writing to file
// 1. destination
// 2. source
fs.writeFileSync("writeme.txt", readMe);

//code
