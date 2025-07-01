// ES6 ke baad hi hota hai -> and is Syntactical SUGar only 

// class User {
//     // jaise hi new use karoge constructor call ho jata hia 

//     constructor(username , email , password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     } 
//     // isko Method bologe 
//     // function likhne ki jarurat nahi 
//     encryptPassword() {
//         return `${this.password}abc`
//     }

// changeUserName(){
//     return `${this.username.toUpperCase()}`
// }
// }

// const mayuri = new User('Mayuri' , 'mayuri@gmail.com', '123');

// console.log(mayuri.encryptPassword());

// console.log(mayuri.changeUserName());

// behind the scene 

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}
const Tea = new User('Tea' , 'tea@gmail.com', 'teae');

console.log(Tea.encryptPassword());
console.log(Tea.changeUserName());
