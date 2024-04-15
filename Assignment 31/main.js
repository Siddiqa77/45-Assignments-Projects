"use strict";
// Q no.31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
//creating Array
let userNames = ["Zeeshan", "Tanya", "Admin", "Usman", "Sidra"];
// //using forEach 
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is empty we need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`\n Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`\n Hello ${oneUser},thank you for logging in again.`);
        }
    });
}
