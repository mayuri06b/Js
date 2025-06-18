// Control flow in javaScript 

// >, <, >= ,<= , == , != , ===

if (isLoggedIn == true){
    // Write what u want to execute

} else if(health === "no"){
    // scope is defined 
    let variableInside = "Hsnwl"

} else {

}

// shift + alt ^ and v to copy 


switch (month) {
    case "JAN":
        console.log("Welocme to January");
        break;
    case 2:
        console.log("Welocme to February");
        break;
    default:
        break;
}





// if() console.log() , console.log();


// Falsy Value
// false , 0 , -0 , BigInt 0n , "" , null , undefined , Nan 

// truthy Value 
// "0", 'false', " ", [] , {} , function(){}

false == 0 // true 
0 == '' //true 
false =='' // true

// --------------------------------
Nullish Coalescing Operstor (??) : null undefined 

agar null a jaye to saftey check ho jaye 
let val1 = 5?? 10 
val1 = null ?? 10
val1 = undefined ?? 10 ?? ...........

if(userEmail.length === 0){
    console.log("array is empty");    
}
if(Object.keys(emptyObj).length === 0) {
    console.log("array is empty");
}

// terniary Operator 
// (condition) ?true execution :false execution;