class User {
    constructor(email , password) {
        this.email = email;
        this.password = password;
    }

    // call stack size exceded 
    // cause constructor bhi set kar raha hoga and setter bhi 

    set password(password){
        this._password = password
    }
    // jab koi access kar raha hai so hum usko bolenge ki tum yeh karo 
    get password(){
        return this._password.toUpperCase();
    }
    set email(email){
        this._email = email;
    }
    get email(){
        return this._email.toUpperCase();
    }
}

const mayuri = new User('mayuri@gmail.com' , 'abc');
console.log(mayuri.email);

// getters and setters matlab tum uska Acess dena hi nahi chahte 
