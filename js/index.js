console.log('Welcome Dear');

let myForm = document.querySelector('#my-form');
let emailInput = document.querySelector('.form-control');
let msg = document.querySelector('.msg')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(emailInput.value == '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('success');
    }

}

let myform = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let textInput = document.querySelector('#email');
let textarea = document.querySelector('#message');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || textarea.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('success');
    }

}

