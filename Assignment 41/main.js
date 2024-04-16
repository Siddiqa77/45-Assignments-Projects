"use strict";
// Qno.41 Magicians: Make a array of magician’s names.
//  Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
//Define a function to print magidioan name
function show_magicians(magisian) {
    magisian.forEach(name => console.log(name));
}
// Define an Array
let magisianName = ["Harry Potter", "Lohana", " Dabola"];
// call the function
show_magicians(magisianName);
