// requiring the file system module (from node.js files) which allows for file creation
const fs = require('fs');
// requiring the page-template.js module (from local files) which creates the HTML page
const generatePage = require('./src/page-template');

// array comprised of the strings typed in console (the user command-line arguments)
const profileDataArgs = process.argv.slice(2, process.argv.length);

// taking the array and assigning variables to the strings at each index
const [name, github] = profileDataArgs;

// // console log of 2 different ways to print the individual objects of an array that were typed in the console
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('====================');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!')
});