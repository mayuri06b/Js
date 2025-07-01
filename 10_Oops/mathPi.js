// Object Related cheez hai

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const discriptor = Object.getOwnPropertyDescriptor(Math , 'PI');

// discriptor.writable = true;

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); 

// console.log(discriptor);

const chai = {
    name: 'Lemon Tea',
    price: 250,
    isAvailable: true,

    orderChai:function(){
        console.log('Chai nahi Bani');
    }
}

// descriptor -> jo hai wo property ko so name , price or isAvailable

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

Object.defineProperty(chai , 'name' , {
    //writable: false,
    enumerable : false,

})

// console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

for (let [key , value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}

// Important Interview Question : Is Math.pi editable and if not then why ?

