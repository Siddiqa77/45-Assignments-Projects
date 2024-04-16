"use strict";
// Qno.43 Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one
// array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function to print magician name
function show_magicians(magician) {
    magician.forEach((name) => console.log(name));
}
// return function with map function
function make_great(magicians) {
    return magicians.map((name) => `The Great ${name}`); //map function is modified for save value in Array
}
// Define an Array
let magicianNames = ["Harry Potter", "Lohana", " Dabola"];
//   // call the function
//   make_great(magicianNames);
//   // applying variable
//   let great_magicians = make_great(magicianNames);
//   //call the function to show in list form
//   show_magicians(great_magicians);
//Making a copy of original Array by slice function
let copy_magiciansNames = magicianNames.slice();
// modified the coppied Array and include The Great
let copy_greatMagicians = make_great(copy_magiciansNames);
// show original and copy
console.log("Original Array");
show_magicians(magicianNames); // original
console.log("\nCopied Array");
show_magicians(copy_greatMagicians); // copied
