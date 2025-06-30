const user = {
    name: 'mayuri',
    loginCount : 8,
    signedIn: true,
    getUserDetails: function (){
        // console.log('Got user Details from DataBase');
        // console.log(`UserName is ${this.name}`);
        console.log(this);
        
        // current Context -> object 
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());

// console.log(this);

// {} yeh node mein hai pr browser pr cheeze change hoti hai 

// This was Object Literal------------
// let date = new Date()
// const promise1 = new Promise();
// new keyword kya hai
// yeh ek constructor function 
// naya Context bana ne mein Help karta hai -> constructor function bolte hai 


// this keyword se tum current context set kr sakte ho 

function User (username , loginCount , isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`${this.username}`);
    }
    // return this
}

const userOne = new User('Mayuri' , 6 , true);
const userTwo = new User('Hello world' , 6 , true);

// console.log(userTwo.greetings());

// Values Override ho jayegi 
// ne  keyword se hume ek copy mil jati hai , so karna kya hai hume ek Naya instance mila hai 
// write a verbose Code 


// Jaise hi aap new keyword use karte ho ek empty keyword generate hota hai 
// 1 step -> naya object cReate ho raha 
// 2 step -> Constructor function call hota 
// 3 step -> values Inject hota hai 
// 4 step -> value return ho jati hai 

console.log(userOne.constructor);

console.log(userTwo instanceof User);

// refernce hoti hai khud ke baremein
 
// operator hota hai instanceof