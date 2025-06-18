// Global Execution Context 
/*
Types of context 
- Global Execution Context 
- Functional Execution Context 
- Eval Execution Context (Mongoose)

Stages -
1) Memory Creation Phase 
2) Execution phase 

Example : Code Snippet 

Step1 : {} global exection context -> (inside) this variable

Step2 : cycle 1 -> <------------------------------------------------------------------------------------------------------------|
            1) Memory Creation Phase                                                                                            |
            val1-> undefined                                                                                                    |
            val2-> undefined                                                                                                    |
            addNUm-> function defination                                                                                        |
            result1-> undefined                                                                                                 |    
            result2-> undefined                     |--------------------> new execution environment + thread is created        |
                                                    |                     1)Memory creation                                     |
                                                    |                       num1-> undefined                                    |
            2) Execution phase                      |                       num2-> undefined                                    |
            val1-> 10                               |                       sum-> undefined                                     |
            val2-> 2                                |                     2)Execution Phase                                     |
            addNum-> function defination            |                       num1 -> 10                                          |
            addNum(10 , 5)--------------------------|                       num2 -> 5                                           |
                                                                            sum -> 15                                           |
                                                                            value is returned to global exection ---------------|

  --------------------------------------------------------------------------------------------------------------------------------
  
  for each function call a new Exection enviornment alsong with a thread is created 
            
*/          

let val1 = 10 
let val2 = 5
function addNum(num1 , num2) {
    let sum = num1 +num2
    return sum
}
let result1 = addNum(val1 , val2)
let result2 = addNum(96 + 4)


// Stack call Stack is very simple each function call is added to the stack and when done either -> 
// } or return then ends and is poped 
