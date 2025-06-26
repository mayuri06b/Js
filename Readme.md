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
```js
 const clock = document.querySelector('.clock');

    setInterval(function () {
      let date = new Date();
      clock.innerHTML = date.toLocaleTimeString();
    }, 1000);

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let minutes = document.getElementById('minutes').value;
      let seconds = minutes * 60;
      let show = document.querySelector('#show');
      show.hidden = false;

      countdown = setInterval(function () {
        show.innerHTML = `Min ${Math.floor(seconds / 60)} : Sec ${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
        if (seconds <= 0) {
          clearInterval(countdown);
          show.innerHTML = "Time's up!";
        } else {
          seconds--;
        }
      }, 1000);
    });
```
## Project 4 
```js
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```