/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// https://www.npmjs.com/package/inquirer
// npm i inquirer

// https://www.npmjs.com/package/qr-image?activeTab=readme
// npm i qr-image

// Step 1: take user input
// Step 2: convert into qr
// Step 3: save user input URL into URL.txt file

import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"

inquirer
    .prompt([
        {
            message: "Enter your text or URL here to convert it into QR:",
            name: "URL"
        },
    ])
    .then((answers) => {
        console.log(answers)
        console.log("you entered " + answers.URL);
        const userInput = answers.URL;
        // create QR
        var qr_svg = qr.image(userInput);
        qr_svg.pipe(fs.createWriteStream("qr_image.png"));
        // Save URL in file
        fs.writeFile("URL.txt", userInput, (err) => {
            if (err) throw err;
            console.log("URL created Successfully!")
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // error
        } else {
            //error 2
        }
    });