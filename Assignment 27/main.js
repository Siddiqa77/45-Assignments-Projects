"use strict";
// Q no.27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// variables
let alien_color = "green";
//First version
if (alien_color === "green") {
    console.log("(version 1) Player shot down green alien so, player have earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("Player shot down yellow alien so, player have earned 10 points.");
}
else if (alien_color === "red") {
    console.log("Player shot down red alien so, player have earned 15 points.");
}
// second version
let alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log("\n Player shot down green alien so, player have earned 5 points.");
}
else if (alien_color2 === "yellow") {
    console.log("\n(version 2) Player shot down yellow alien so, player have earned 10 points.");
}
else if (alien_color2 === "red") {
    console.log("\n Player shot down red alien so, player have earned 15 points.");
}
// Third version
let alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("\n Player shot down green alien so, player have earned 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("\n Player shot down yellow alien so, player have earned 10 points.");
}
else if (alien_color3 === "red") {
    console.log("\n(version 3) Player shot down red alien so, player have earned 15 points.");
}
