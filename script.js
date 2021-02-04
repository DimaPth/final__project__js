const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');
const createButton = document.querySelector('.register-form button');
const loginButton = document.querySelector('.login-form button');
const signInLink = document.querySelector('.register-form a');
const createAccountLink = document.querySelector('.login-form a');
const userNameReg = document.querySelector('.register-form .name');
const userPasswordReg = document.querySelector('.register-form .password');
const userEmailReg = document.querySelector('.register-form .email');
const userEmailLog = document.querySelector('.login-form .name');
const userPasswordLog = document.querySelector('.login-form .password');

const swap = (e) =>{
    e.preventDefault();
    registerForm.classList.toggle('hide');
    loginForm.classList.toggle('hide');
}

const nav = (e) =>{
    e.preventDefault();
    document.location.href = "./dashboard/index.html"
}

loginForm.addEventListener('submit', nav);
signInLink.addEventListener('click', swap);
createAccountLink.addEventListener('click', swap);