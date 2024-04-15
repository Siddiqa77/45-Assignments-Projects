
//Q no.03 Name Cases: Store a person’s name in a variable, and then print that person’s name in 
// lowercase, uppercase, and titlecase.

let personName: string = "siddiqa"

//lowercase
 
console.log("personName:", personName.toLowerCase());

//uppercase
console.log("personName:", personName.toUpperCase());

//titlecase
console.log("titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1));