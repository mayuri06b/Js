// Async Code 
/*
Javascript -> Synchronous 
           -> Single Threaded 

    Js ka Engine akle kabhi nahi milta hamesha will be associated with run time Environment

Exectution Context 
---execute one line of code at a time 
purana stmt execute nahi hua hai so agla Kam nahi kar sakte 
Call Stack , Memory Heap hai 


Blocking Code Vs Non Blocking Code 

- block the execution flow of program -> Read file Sync 
- doesnt block Execution (koi block nahi kar raha hai) -> Read file async 

------------------------------------------
use cases hote hai -> accha bura nahi hota 

Web Api Browser ke alawa kahi nahi Milegi 
--- Node api -> No DOM 

Task queue -> amkes Js FAST and ASYNC 
high Priority queue / promise queue 
mujhe Notify karne ke liye 

setTimeout 
register CALL Back -> may be kisi event pr laga rakaha ho 
CB ko wo Queue mein daal deta hai 
task Queue -> fata fat cb ko call stack mein add kar deta hai 

fetch() ->>> Promise aaja te hai so unke liye High Priority queue use hoti hai 
 is Process ko Event LOOp bolte hai cause JS assumes tobe multi threaded
 

*/