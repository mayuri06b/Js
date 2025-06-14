// when comparing different Datatypes 

console.log("2">1);

// Very Important catch == operator works diffrently 
// >= convert null to 0 and return true;
console.log(null > 0); // false;
console.log(null == 0); // false;
console.log(null >= 0); // true;

// undefined will always give value false 

// === this is Strict check 

console.log("2" === 2); //false 
