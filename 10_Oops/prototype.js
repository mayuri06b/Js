// Javascript ka prototypal behavior  -> jab tak null value nahi mil jati wo upar jate jata hai 
// webBrowser pr -> 0 - , 1 - , length
// and ek prototype return hota hia 

// arrow Function ke pass this ka Acccess nahi hota hain 
/**
 
Array --> object --> null 
strings -> Object -> null
function -> Object -> null

everything is an object 

function  is a function and object aswell 


 */

function multiplyByFive(num) {
    return num*5;
}

multiplyByFive.power = 2
console.log(multiplyByFive(3));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);
// Bydefault context -> mein ke us method ka this 

function createUser(username , score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}
createUser.prototype.print = function() {
    console.log(`Score is ${this.score}`);
    console.log(`User is ${this.username}`); 
}

// context samjhane ke liye -> this ka matlab -> jisne bhi bhulaya hai uske pass jao 

const chai = new createUser('chai' , 12);

const tea = new createUser('tea' , 250);

chai.increment()
chai.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.
 
A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound
to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created object is returned.

*/