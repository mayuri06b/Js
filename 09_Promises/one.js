//----------Promises 
// eventual Completion of async operation and its Resulting value 

// kuch cheezo ko time lagta hai , latency hoti hai , calculative hote hai , could be Cryptographic i.e async Wait 
// future mein ja kar complete hoet hai 

// 3 states hote hai 
// pending , fulfilled , rejected 

// mainly promises are consumed 
// but how to make promises 

// object representing eventual Completion 
// Q and bluebird -> liberaries used earlier 

// Creation
const promise1 = new Promise(function (resolve , reject){
    // Do an async task 
    // db calls , cryptographic tasks , nt calls 
    setTimeout(()=>{
        console.log('Async Task Is complete');
        resolve()
    },1000)
})

//then ka connection resolve ke sath 
promise1.then(function(){
    // yaha pr jo be Result aya hai wo consume hota hai 
    console.log('Promise Consumed');
    
})

new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log('Aync Task two');
        resolve();
    },1000)
}).then(()=>{
    console.log('promise2 consumd');
})

const promise3 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('Data Collected');
        // data can be passed , mostly its an object which is passed 
        // data will be collected at then()
        resolve({username:'Mayuri' , email:'mayuribarapatre9@gmail.com'})
    },1000)
})

promise3.then((user)=>{
    console.log(user);
})


// with Chaining pehle wale ke output ke liye wait karo 


const promise4 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error) {
            resolve({username:'Mayuri' , email:'mayuribarapatre9@gmail.com'});
        } else {
            reject('ERROR: Something went wrong!')
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('Chalo Ho gaya ');
})

const promise5 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error) {
            resolve({username:'Javascript' , password:'123'});
        } else {
            reject('ERROR: Something went wrong!')
        }
    },1000)
});

// async await can be used jo ki wait karta hai 

async function consumePromiseFive(){
     // they cannot handle error directly 
    try {
        const respone = await promise5
        console.log(`Response from 5 is${respone}`);
    } catch (error) {
        console.log(error);
    }
} 

consumePromiseFive()

async function getAllUsers() {
    const respone = await fetch('https://api.github.com/users')
    const data = await respone.json()
    console.log('Data is yet to come');
    console.log(data);
}

getAllUsers()

fetch('https://api.github.com/users/mayuri06b').then((respone)=>{
    console.log(respone);
    return respone.json()
}).then((data)=>{
    console.log('then 2 ');
    console.log(data);
})
.catch((err)=>{
    console.log(err);  
})
