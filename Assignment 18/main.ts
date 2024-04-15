// Q no. 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


//Making a Array of Countries and print its original order
let placeName: string[] = ['China','Pakistan','Brazil','Denmark','Argentina'];
console.log("Original Order", placeName);

// print the Array in Alphabetical order without changing its original order
console.log("Alphabetical Order", [...placeName].sort()); //... mean copy and sort() function used for arranging in Alphabetical order

// show that the Array still in original order
console.log("Still in Original Order", placeName);

//Reverse the Array that arrange in Alphabetical order 
console.log("Reverse Order", [...placeName].reverse()); //... mean copy and reverse() function used for reversing in order

// show that the Array still in original order
console.log("Still now in Original Order", placeName);


// we have changed the original Array order reversed
console.log("Original Array Reversed", placeName.reverse());


// we have changed now the original Array order back to reversed again
console.log("Back to Original Order", placeName.reverse());

// print the Array to show that its order changed in Alphabetical order
console.log("Sorted in Alphabetical Order", placeName.sort());


// we have changed now the original Array order back to reversed order again
console.log("Original Array Reversed Again", placeName.reverse());



