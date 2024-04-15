"use strict";
// Q no.32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message
// that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
// Array of current users
let current_users = ["Usman", "sidra", "Salma", "zain", "Ayesha"];
// Array of new users
let new_users = ["Maha", "Sidra", "Ali", "Hamza", "Ayesha"];
// loop through new_users to check for username availability
new_users.forEach((newOneUser) => {
    //Making a condition for username already exist in our newCondition variable
    let ourCondition = current_users.some(// some() function is used to comparison between two Arrays
    (currentOneUser) => currentOneUser.toLowerCase() === newOneUser.toLowerCase());
    //print different messages usinf if and else statement
    if (ourCondition) {
        console.log(`Sorry ${newOneUser},is already Exist!`);
    }
    else {
        console.log(`This Username ${newOneUser} is Available`);
    }
});
