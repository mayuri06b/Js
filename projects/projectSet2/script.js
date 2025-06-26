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