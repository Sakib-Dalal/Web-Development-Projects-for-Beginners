// https://nodejs.org/docs/latest-v18.x/api/index.html
// https://nodejs.org/docs/latest-v18.x/api/fs.html#promise-example
// https://nodejs.org/docs/latest-v18.x/api/fs.html#fsreadfilepath-options-callback

// File system

const fs = require("fs")

// write data into file and save 
fs.writeFile("message.txt", "Hello Node JS", (err) => {
    if (err) throw err;
    console.log("The file has been saved");
});

// read data from the file 
fs.readFile("message.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
});
//If no encoding is specified, then the raw buffer is returned.

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});