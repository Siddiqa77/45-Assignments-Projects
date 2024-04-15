"use strict";
// Q no.24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//define variables
let car = "car";
let upperCaseCar = "CAR";
let ten = 10;
let twenty = 20;
let fruits = ['apple', 'orange', 'banana'];
//Tes for equality and inequality with strings
console.log("Is car is equal to car?");
console.log(car == "car");
console.log("\nIs car is not equal to car?");
console.log(car != car);
//Test using the lower case function
console.log("\nIs CAR is equal to car after converting to lowerecase?");
console.log(upperCaseCar.toLowerCase() == "car");
console.log("\nIs CAR is not equal to car after converting to lowerecase?");
console.log(upperCaseCar.toLowerCase() != "car");
//Numerical tests involving equality and inequality
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//Numerical tests involving greater than and less than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
//Numerical tests greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
// numerical tests using "and"&& and "or"|| operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
console.log("\n 20 is greater than 50 OR twenty is equal to 20?");
console.log(20 > 50 || twenty == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);
//Test whether an item is include in array
console.log("\n Is orange include in my fruits array?");
console.log(fruits.includes("orange"));
//Test whether an item is not include in array
console.log("\n Is orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
