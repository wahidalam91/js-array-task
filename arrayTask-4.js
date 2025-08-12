// Task-4. Checking if it's an Array

// Instructions:
// a) Create different variables, each containing either an array or a non-array value.

// b) Now use isArray to check if each variable is an array.

// c) Print a message to the console indicating whether each variable is an array or not.

// a
let myName = "Wahid"

let isMarried = true;

let myFamilyMembers = ["Taslima", "Wasi"];

// b + c

if(Array.isArray(myName)){
    console.log("myName variable is an array")
}else{
    console.log("myName variable not an array")
}

if(Array.isArray(isMarried)){
    console.log("isMarried variable is an array")
}else{
    console.log("isMarried variable is not an array")
}

if(Array.isArray(myFamilyMembers)){
    console.log("myFamilyMembers variable is an array")
}else{
    console.log("myFamilyMembers variable is not an array")
}