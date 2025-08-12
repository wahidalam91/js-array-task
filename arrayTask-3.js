//Task-3. Checking Array Membership with ‘includes’

// a) Create an array of books containing different book.

// b) Use the includes method to check if the array contains a javascript book.

// c) Print a message to the console indicating whether the element is present in the array or not.

// a
let jsBooks =["You Don't Know JS", "Effective JavaScript", "Eloquent JavaScript"];

// b
let included = jsBooks.includes("Effective JavaScript");

// c
console.log(included, "The Book You Mentioned is included in our array");