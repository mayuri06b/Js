// when comparing different Datatypes 

console.log("2">1);

// Very Important == operator works diffrently 
// >= convert null to 0 and return true;
console.log(null > 0); // false;
console.log(null == 0); // false;
console.log(null >= 0); // true;

// undefined will always give value false 

// === this is Strict check Correct Output ayega 

console.log("2" === 2); //false 
console.log(undefined <= 0); //false 
console.log(`Checking for Null Values`);
console.log(null === 0); //false 


