const colorCodes ={
    red:'#f16f6f',
    orange:'#f1bf6f',
    purple:'#8b6ff1',
    yellow:'#f1d96f'
}

const createButton = document.querySelectorAll('.color-button')

createButton.forEach(button => {
    button.addEventListener('click' , (e)=>{
        console.log(e.target);
        // here call a function to create a note object;
        const color = button.getAttribute('id');
        createNode(colorCodes[color])
    })
});

function createNode(color) {
    let div = document.createElement('div');
    div.setAttribute('class', 'note');

    let title = document.createElement('input');
    title.setAttribute('placeholder' , 'Title')
    title.setAttribute('class' , 'title-content')

    let contentSection = document.createElement('textarea');
    contentSection.setAttribute('placeholder', 'Add content here');
    contentSection.setAttribute('class', 'input-content');

    let saveButton = document.createElement('button')
    saveButton.innerHTML = 'Save'
    saveButton.setAttribute('class' , 'save-button')

    // let editButton = document.createElement('button')
    // saveButton.innerHTML = 'Edit'
    // saveButton.setAttribute('class' , 'edit-button')

    // div.append(editButton)

   
    div.appendChild(title)
    div.appendChild(contentSection)
    div.append(saveButton)
    div.style.backgroundColor = color;

    document.querySelector('.content').appendChild(div);
    console.log(div);
}
