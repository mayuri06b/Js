// singleton object 
// Object.create();


// object Literal 
const objec1 = {name : "mayuri" , age : 12};
console.log(objec1.name);
console.log(objec1["name"]);

//Use Symbol and use it as key
// key : vale 
// [mySymbol] : "Value"
// use it as name[mySymbol]

// Object.freeze(objec1);

// just cannot change the value 

objec1.functionName = function () {
    console.log(`HELO ${this.name}`);
}
console.log(objec1.functionName());


// ---------------------------------
// const tinderUser = new Object();  
// singleton Object

const tinderUser = {} // Non Singleton

// Nested Object 

// Object.assign()
// when u want to merge two objects 

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//using Spread Operator 

const obj1 = {1: "Mayuri" , 2:"barapatre"};
const obj2 = {3: "Mayuri" , 4:"barapatre"};

const obj3 = {...obj1 , ...obj2};
console.log(obj3);

// Google this hasOwnProperty --> add atrribute name 
console.log(obj3.hasOwnProperty(3));

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));


// -----------------------

// const {attributeName} = objectName --- Destructuring the object 


// API - earlier was xml , now its json , can be nexted of arrays 
/* 
    {
        "name" : "Mayuri",
        "age" : 12,
        "hello": "world"
    }

    {
        {}
        {}
    }    
*/
