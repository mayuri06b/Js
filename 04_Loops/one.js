for (let i = 0; i <=12; i++) {
    // console.log(i);
}

// - Important aspects 
/*
    scope of for loop and other loops , they are important , variables decalred inside are not
    accessible outside 
    - edge case of do while loop
    - break; and continue statement 

 */

    // Important loops for arrays Traversal 
    // for of loop

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val); 
}

const str = "Mayuri"

for (const i of str) {
    // console.log(i);
}

// Maps
// holds key value pair , order in which it is inserted , unique values 


const map = new Map();
map.set(1 , "book");
map.set(2 , "pen")
map.set(3 , "pencil")

// console.log(map);

for (const [key , value] of map) {
    // console.log(`Key:${key} and Value:${value}`);
}

// for - of loop is not iterateable for objects

const myObject = {
    name : "mayuri", 
    age : 20,
    college:"Rcoem"
}

// major difference in for in loop gives keys 
// map is not iteratable (for in) loop mein
for (const key in myObject) {
    // console.log(myObject[key]);
}

// for each loop higher order function

arr.forEach( (item) => {
    console.log(item);
    
});
// arr.forEach(printme); 

const lang = [
    {
        codingLanguage:"JavaScript",
        languageName : "js"
    },
    {
        codingLanguage:"Java",
        languageName : "java"
    },
    {
        codingLanguage:"python",
        languageName : "py"
    }
]

lang.forEach((item) => {
    console.log(item.codingLanguage);
    
})
