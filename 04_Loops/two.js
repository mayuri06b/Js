// FurtHER more on LOOP 

// forEach ke andar tumhe callback Function pass karana hi padega 
// filter(callback)

const myNums = [2 , 3 , 5 ,6 ,7 , 8]

// if u open scope then u  must write return else can use () then no return 

// let newNums = myNums.filter((nums)=> {return num > 4})

// Chaining is also a Concept in which u can chain multiple Functions 

// - filter (conditioning )
// - map changing puropse 

let newChangedArr = myNums.map((num) => num + 10);
console.log(newChangedArr);

// example of Chaning 
// 1 st one is passed to the next Chain 

let newArr = myNums.map((num)=> num + 4).filter((num)=> num > 10)
console.log(newArr);


//-----------------------------------Reduce 

myShoppingCart = [
    {
        item:"Dress",
        cost:12000
    },
    {
        item:"Tea Bags",
        cost:2500
    },
    {
        item:"Shopping Bag",
        cost:25
    },
    {
        item:"Worlsk",
        cost:230
    }
];

const totalCost = myShoppingCart.reduce((sum , curr)=> (sum+curr.cost) ,0);
console.log("Total Cost is ");
console.log(totalCost);
