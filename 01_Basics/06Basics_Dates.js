// Dates 
let mydate = new Date();
// Object in javaScript


//Month starts from 0 

// Sat Feb 24 2024
let newDate = new Date(2024 , 1 , 24);
console.log(newDate.toDateString());

// console.log(mydate.getDate());

let timeStamp = Date.now()

// getTime()

// convert to seconds

// getMonth - starts with 0 

console.log(Math.floor(timeStamp/1000));


// This is mainly used for Customization purposes 

let time1 = new Date();
time1.toLocaleString('default' , {
    weekday: "long",
})

console.log(time1);

