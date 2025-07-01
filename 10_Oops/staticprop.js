class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username is : ${this.username}`);
    }

    // Mai chahti hu jaise hi ek User bane usko ek Id assign ho 
    // iska access nahi dena chahte user ko app extend bhi Karoge na waha pr bhi yeh 
    // use nahi hone dega 
    static createId(){
        return `123`;
    }

}

const mayuri = new User('Mayuri');

// console.log(mayuri.createId());


class Teacher extends User{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    } 
}

const chai = new Teacher("chai", "chai@Teacher.com",'123');

// console.log(chai.createId());

