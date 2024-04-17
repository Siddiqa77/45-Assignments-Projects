"use strict";
// Qno.44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
//   Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
// define a function by using rest parameters
function makeSandwitch(...items) {
    console.log("\nMaking a Sandwitch with the following items: \n");
    items.forEach(SingleItem => console.log(SingleItem));
    console.log("\n Now Enjoy Sandwitch");
}
//call the function with 3 Arguments
makeSandwitch("Chicken", "Cheese", "Mayonees", "Egg");
makeSandwitch("Bread", "Butter");
makeSandwitch("Bread", "Butter", "Mayonees", "Egg", "Chicken", "Kabab", "Tomato", "Lettuce");
