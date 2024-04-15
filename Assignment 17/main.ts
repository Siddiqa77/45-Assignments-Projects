// Q no.17 Shrinking Guest List:
//  You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
//  actually have an empty list at the end of your program.


let guestList = ['Mr.Taha','Tanya','Mrs.Yasmeen','Sir Furqan'];

// Guest name who will not come
let dontCome = guestList[1];

// Why this guest will not come
console.log(dontCome, "Can't come, due to urgent work.");

// Remove previous guest  with some new guest
guestList.splice(1, 1, "Sir Amir");

// Inform to guestslist of Array
console.log("Good News! We have Found a Bigger Table for Dinner.")

//add guest in the beggining of Array
guestList.unshift("Ali Sahab");


//Add a new guest at ending of Array
guestList.push("Zain");

// Get a middle index of Array
let middleIndex: number = Math.floor(guestList.length / 2);


//Adding a new guest at middle of the Array
guestList.splice(middleIndex, 0, "Usama");



// Send Invitation to New guest 
 guestList.forEach(oneGuest => console.log(`Assalam-o-Alaikum ${oneGuest}, Would you like to Dinner with me? `));

// Informing message of Excuse to Guests
 console.log("Unfortunately, the new dinner table won't arrive at time, so I can only invite two guests to dinner with me.");

 // using while loop to remove guests from Array until 2 name remain 
 while(guestList.length > 2){
let removeGuest = guestList.pop()
console.log(`Sorry, ${removeGuest} Can't invite you to Dinner.`);

 }
 console.log("Invitation to the Last 2 guests");

//send message last two guests
 guestList.forEach(lastTwo => console.log(`Luckily ${lastTwo}, You are still Invited to Dinner.`));

 //Removing last two guests from Array by pop 
 guestList.pop();
 guestList.pop();

 console.log("Empty List", guestList);

 




