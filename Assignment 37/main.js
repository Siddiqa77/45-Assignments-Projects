"use strict";
// Q no.37 Large Shirts: Modify the make_shirt() function so that shirts are 
// large by default with a message that reads I love TypeScript. Make a large
// shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", print_message = "I Love TypeScript") {
    console.log(`Creating a ${size} shirt with ${print_message} prints on shirt`);
}
//Calling a function by default value
make_shirt();
// Calling a function with medium size and default message
make_shirt("Medium");
//Calling a function now with small size and different print message
make_shirt("Small", "I Love JavaScript");
