
import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const mail = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    email: '',
    message: '',
};


form.addEventListener("input", throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

startInputValue();

function onInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}

function startInputValue() {
    const { email, message } = formData;
    mail.value = email;
    textarea.value = message;
}
