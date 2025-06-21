// new Number(100);
// toString() , toFixed(2) .00
// toPrecision(3)
// decimal point ke pehle priority
// toLocalString -> 10 ,000 , 000 'en-IN' for indian

/*

Math is Itself an object 
Math.random(); 0 -1 range 
can even specify the (Math.random()*10)+ 1

Math.floor((Math.random()*(max - min + 1))+ min);

use this when need a specific range 
 */


const max = 20 , min = 10;
console.log(Math.floor((Math.random()*(max - min + 1))+ min));

console.log(typeof Math);
