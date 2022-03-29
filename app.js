// console log of array comprised of the strings typed in console
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// console log of 2 different ways to print the individual objects of an array that were typed in the console
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('====================');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

