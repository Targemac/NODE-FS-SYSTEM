const fs = require("fs");

//ASynchronous methode of reading a file (other code would run while file reads from source, iut is non blocking)
// 1. file to read from
// 2. character enconding
// 3. callback function (error, data)
// const readMe = fs.readFile("./readme.txt", "utf-8", (err, data) => {
//   // show ouput in console
//   //   console.log(data);
// });

//Async writing to file
// 1. detsination
// 2. source
// 3. callback function (error, data)

fs.readFile("./writeme.txt", function (err, data) {
  const newasyncOutput = data;
  fs.writeFile("asyncWriteMe.txt", newasyncOutput, (err) => {
    err ? console.log(err) : console.log("The file is saved...");
  });
});

//code
