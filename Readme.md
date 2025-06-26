### This repo holds all the Notes and important concepts Of JAVASCRPT that I learned during my JS journey of learning and Creating projects
## Project 1 

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
    button.addEventListener('click' , (e)=>{
        const c = e.target.id;
        if(c === 'grey') {
            body.style.backgroundColor = c            
        }else if(c === 'white') {
            body.style.backgroundColor = c            
        }else if(c === 'yellow') {
            body.style.backgroundColor = c            
        }else if(c === 'blue') {
            body.style.backgroundColor = c            
        }
    })
})
```
## 🔑 Key Takeaways from the Code

- **🎯 Purpose**: Change the background color of the page when a button is clicked.

- **🔍 Selection**:
  - `buttons`: Selects all elements with the class `.button`.
  - `body`: Selects the `<body>` tag.

- **🧠 Logic**:
  - Iterates over each button.
  - On `click`, gets the `id` of the clicked button.
  - If `id` is one of `grey`, `white`, `yellow`, or `blue`, sets `body.style.backgroundColor` to that `id`.

- **🪄 Assumption**:
  - Button `id` values **must match** valid CSS color names.

- **🧹 Optimization Tip**:
  - The `if-else` block is unnecessary. Can be simplified to:
    ```js
    body.style.backgroundColor = e.target.id;
    ```


## Project 2

```javascript
const form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const weight = (document.querySelector('#weight').value)
    const height = (document.querySelector('#height').value)

    let result = document.querySelector('.result');
    if(weight == undefined || height == undefined || weight <=0 || height <=0){
        result.innerHTML = 'Please Provide a Valid Input'
    }else {
        const ans = CalculateBMI(height , weight);
        if(ans === 'Under Weight'){
            result.style.backgroundColor = 'yellow';
            result.style.color = 'black';
        }else if(ans === 'Normal Weight'){
            result.style.backgroundColor = 'green';
            result.style.color = 'black'
        }else {
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
        }
        result.innerHTML = ans;
    }
    console.log(weight , height);
})

function CalculateBMI(height , weight) {
    let ans = weight/(Math.pow((height/100) , 2));
    if(ans <18.6) {
        return 'Under Weight';
    }else if(ans >= 18.6 && ans< 24.9){
        return 'Normal Weight';
    }else {
        return 'OverWeight';
    }
}
```
## 📝 BMI Form - Key Takeaways

- **📥 Form Submit**: Listens for form `submit`, prevents default behavior.
- **📏 Input**: Gets `weight` and `height` from input fields.
- **✅ Validation**: Checks for missing or invalid input.
- **⚖️ BMI Logic**:
  - Uses `CalculateBMI(height, weight)` to compute BMI.
  - Returns: `'Under Weight'`, `'Normal Weight'`, or `'OverWeight'`.
- **🎨 Result Styling**:
  - Yellow = Underweight
  - Green = Normal
  - Red = Overweight
- **🖨️ Output**: Displays result message and updates background + text color.

## Project 3 