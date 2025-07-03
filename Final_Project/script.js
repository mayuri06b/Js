let notesArray = JSON.parse(localStorage.getItem("notes")) || [];

window.onload = function () {
        notesArray.forEach(note => {
        createNode(note.color, note.title, note.content , note.date); 
    });

};

if(notesArray.length >= 1 ){
    let deleteAll = document.createElement('button');
    deleteAll.innerHTML = 'Delete All';
    deleteAll.setAttribute('class' , 'deleteAll-button');
    document.querySelector('.content').appendChild(deleteAll);
    deleteAll.addEventListener('click' , ()=>{
        localStorage.clear();
        location.reload()
    })
}else {
    let showMessage = document.createElement('p')
    showMessage.innerHTML = 'No Notes Currently Start creating !!';
    document.querySelector('.content').appendChild(showMessage);
}

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

function createNode(color, titleText = '', contentText = '' , dateValue = '') {
    let div = document.createElement('div');
    div.setAttribute('class', 'note');
    div.style.backgroundColor = color;

    let title = document.createElement('input');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('class', 'title-content');
    title.value = titleText;

    let contentSection = document.createElement('textarea');
    contentSection.setAttribute('placeholder', 'Add content here');
    contentSection.setAttribute('class', 'input-content');
    contentSection.value = contentText;

    let saveButton = document.createElement('button');
    saveButton.innerHTML = 'Save';
    saveButton.setAttribute('class', 'save-button');
    
    let date = document.createElement('p')
    date.innerHTML = new Date().toLocaleDateString();
    date.style.color = 'white'
    div.append(date)
    div.appendChild(title);
    div.appendChild(contentSection);
    div.appendChild(saveButton);

    document.querySelector('.content').appendChild(div);

    saveButton.addEventListener('click', () => {
        const noteData = {
            title: title.value,
            content: contentSection.value,
            color: color,
            dateValue: date.innerHTML
        };
        location.reload()
        displayandSaveNote(noteData);
    });
}

function displayandSaveNote(noteData) {
    notesArray.push(noteData);
    localStorage.setItem("notes", JSON.stringify(notesArray));
}
