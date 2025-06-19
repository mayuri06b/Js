// code -> package

function sayHello(){
    console.log("Mayuri U can !!");
}
sayHello();

// Function may have parameters and arguments 
// functions Return value 

/*

- Scope of function 
undefined is considered as false value -> if(!username) thus use this 
- when u dont know the number of parameters , use rest operator  (...) also known as spread but based on context
- bundle mein mil raha hai 

*/

function shoppingCart(item1 , ...cart) {
    return cart
}

console.log(shoppingCart("chair", "sunScreen", "Charger"));
// [ 'sunScreen', 'Charger' ] 
// cause now item1 will hold "chair"

let anyObject = {
    name : "sam",
    age : 12
}

function handleObject(anyObject) {
    console.log(`Hii ${anyObject.name} your age is ${anyObject.age}`);
    
}

// in the same way u can handle the array as well 

handleObject(anyObject)

// ---------------------------------------------
// Scopes 
// If already the variables could be used then what was the problem , but scope causes problem 
// beacuse then variables become scope independent 
// let and const are scope dependent {}-> block scope else without that its global scope 

let a = "Global Scope"

if(true) {
    let a = "Block Scope"
    console.log(a);  //     1st 
}

console.log(a);   //    2nd

//Global scopes differ in web browser and the code terminal 
