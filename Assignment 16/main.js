"use strict";
// Q no.16 More Guests: 
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ['Mr.Taha', 'Tanya', 'Mrs.Yasmeen', 'Sir Furqan'];
// Guest name who will not come
let dontCome = guestList[1];
// Why this guest will not come
console.log(dontCome, "Can't come, due to urgent work.");
// Remove previous guest  with some new guest
guestList.splice(1, 1, "Sir Amir");
// Inform to guestslist of Array
console.log("Good News! We have Found a Bigger Table for Dinner.");
//add guest in the beggining of Array
guestList.unshift("Ali Sahab");
//Add a new guest at ending of Array
guestList.push("Zain");
// Get a middle index of Array
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at middle of the Array
guestList.splice(middleIndex, 0, "Usama");
// Send Invitation to New guest 
guestList.forEach(oneGuest => console.log(`Assalam-o-Alaikum ${oneGuest}, Would you like to Dinner with me? `));
