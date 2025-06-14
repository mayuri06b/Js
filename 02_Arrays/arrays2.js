const marvel = ["IronMan" , "Caption America" , "SpiderMan"];
const dc = ["BatMan" , "Superman" , "Flash"];

// push 
const list1 = marvel.push(dc);

// concat
const list2 = marvel.concat(dc);

// spread operator is used 
const all_heros = [...marvel , ...dc];

console.table([list1 , list2 , all_heros]);

// flat 

// arrays of arrays -> can be flatten
let arrayOfArray = [12 , 12 , 23 , [2 ,4 ,5] , 89 ];
console.log(arrayOfArray.flat(Infinity));

// isArray , of , from 
console.log(Array.isArray(2));

console.log(Array.of(1 , "amyuroi" , 3));

console.log(Array.from("amyuroi"));


