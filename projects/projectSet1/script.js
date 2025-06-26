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