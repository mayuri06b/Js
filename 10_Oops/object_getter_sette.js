const User = {
    _email: 'h@gmail.com',
    _password: 'abcs',
//  '_' ka mtlab wo ek Private property mein convert ho chuki hai 
//  get -> memory se lekar ane ka kaam 
// behind scene bhi dekh sakte ho tum 

    get email() {
        return this._email.toLocaleUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email);


// search fro Factory function 