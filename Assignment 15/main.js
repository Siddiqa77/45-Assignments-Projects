"use strict";
//  Q no.15 You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Guest name:
let guestList = ['Mr.Taha', 'Miss Tanya', 'Mrs.Yasmeen', 'Sir Furqan'];
// Guest name who will not come
let dontCome = guestList[1];
// Why this guest will not come
console.log(dontCome, "Can't come, due to urgent work.");
// Remove revious guest with some new guest
guestList.splice(1, 1, "Sir.Amir");
// Send Invitation to New guest 
guestList.forEach(oneGuest => console.log(`Assalam-o-Alaikum ${oneGuest}, Would you like to Dinner with me?`));
