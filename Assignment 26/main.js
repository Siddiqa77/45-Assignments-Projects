"use strict";
// Q no.26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//Variable
let alien_color = "green";
// condition is true First version
if (alien_color === "green") {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("\n Player just earned 10 points.");
}
// condition is false Second version
if (alien_color === "blue") {
    console.log("\n Player just earned 20 points.");
}
else {
    console.log("\n Player just loss 10 points.");
}
