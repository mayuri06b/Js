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

