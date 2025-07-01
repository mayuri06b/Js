// call , bind and apply 

function setUserName(username) {
    this.username = username;
    console.log(`called`);
    
}

function createUser(username , email , password){
    // this.username = username;
    // yeh call nahi ho raha hai 
    // apne call ka refernce gaya hai call nahi hua hai 
    // so javascript mien kuch methods diye hai 
    
    // setUserName.call(username)

    // uska Refernce hold karane ke liye sirf .call 
    // pr mujhe uski values bhi to cahhaoye n
    // so usko ek reference dena hoga , cause uska this jo hai wo gayab ho jayega 
    
    setUserName.call(this , username)
    // Isko Acche se ek baar doc ka padh lo 

    this.email = email;
    this.password = password;
}

const chai = new createUser('chai' , 'chai@fb.com' , '123')

console.log(chai);


/*


function
function
Global EC

*/