/*
number(2^53) ,bigint , string , boolean 
null => standalone value represents empty 
undefined -> not assigned 
symbol => unique
*/

// Object 

console.log(typeof null);   // object
console.log(typeof undefined);      // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.table([id , anotherId]);
console.log(id === anotherId);


// Primitive Vs Non Primitive -> based on how data resides in memory and how it is Accessed 

// Primitive 
/* 7types : String , Number , Boolean , null , undefined , Symbol , BigInt (bigNumber)*/

//Refernce type (Non Primitive)
// Arrays , Objects , Functions 
// [] , {key : value} 

// JS dynamically typed Language 

// Function -> type id function only  
const myFunc = function () {
    console.log("Hellow !!");
}

console.log(typeof myFunc);
