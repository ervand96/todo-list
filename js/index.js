const createTodo = document.querySelector('#createTodo');
const todoContainer = document.querySelector('#todoContainer');
const inputFields = document.querySelector('#inputFields');

const TodoList = (e) => {
    e.length === 0 ? createTodo.disabled = true : createTodo.disabled = false;
    createTodo.addEventListener('click', () => {
        let section = document.createElement('div');
        let paragraph = document.createElement('p');
        let removeButton = document.createElement('button');
        let icon = document.createElement('i');

        if (inputFields.value.length !== 0) {
            removeButton.setAttribute('type', 'checkbox');
            icon.classList.add('bx');
            icon.classList.add('bx-trash');
            section.appendChild(icon);
            section.classList.add('list');
            paragraph.classList.add('p');
            paragraph.innerText = inputFields.value;
            todoContainer.appendChild(section);
            section.appendChild(paragraph);
            inputFields.value = '';
        }
        icon.addEventListener('click', () => {
            console.log(22);
            todoContainer.removeChild(section)
        })
    })
} 