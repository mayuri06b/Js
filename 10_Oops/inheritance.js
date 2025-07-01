class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    } 

    addCoursers(){
        console.log(`New Course was Added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@Teacher.com",'123');
chai.addCoursers();

const masalaChai = new User('masalaChai');
masalaChai.logMe();

// masalaChai.addCoursers();

console.log(`Kya tum ek ho ? ${chai === masalaChai}`);

console.log(`Kya tum ek instance ho ? ${chai instanceof Teacher}`);
console.log(`Kya tum ek instance ho ? ${chai instanceof User}`);



// Behind the scene 



