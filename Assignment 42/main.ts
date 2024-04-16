// Qno.42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
//  the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.

//Define a function to print magidioan name
function show_magicians(magician: string[]) {
  magician.forEach((name) => console.log(name));
}
// return function with map function
function make_great(magicians: string[]) {
  return magicians.map((name) => `The Great ${name}`); //map function is modified for save value in Array
}

// Define an Array
let magicianNames = ["Harry Potter", "Lohana", " Dabola"];

// call the function
make_great(magicianNames);

// applying variable
let great_magicians = make_great(magicianNames);

//call the function to show in list form
show_magicians(great_magicians);
