'use strict';

import getUserDatabase from '../API/user/getUserDatabase.js';
import verifyUser from '../utils/user/verifyUser.js';
import navigateUser from '../utils/user/navigateUser.js';
import setFormMessage from '../utils/form/setFormMessage.js';
import handleFormInput from '../utils/form/handleFormInput.js';
import validateUserInput from '../validators/form/validateUserInput.js';
import validateUser from '../utils/user/validateUser.js';

const loginForm = document.getElementById('loginForm');
const usernameInputEl = document.getElementById('username');
const passwordInputEl = document.getElementById('password');

const validLogin = user => {
  verifyUser(user);
  navigateUser('/src/pages/home/home.html', 1500);
  setFormMessage('valid', 'Succesfull login.');
  handleFormInput('valid', usernameInputEl);
  handleFormInput('valid', passwordInputEl);
};

const invalidLogin = () => {
  setFormMessage('invalid', 'Invalid login details.');
  handleFormInput('invalid', usernameInputEl);
  handleFormInput('invalid', passwordInputEl);
};

const defaultLogin = () => {
  setFormMessage('default');
  handleFormInput('default', usernameInputEl);
  handleFormInput('default', passwordInputEl);
};

const validateLogin = async e => {
  e.preventDefault();

  const userDatabase = await getUserDatabase();
  const enteredUsername = usernameInputEl.value;
  const enteredPassword = passwordInputEl.value;
  const user = userDatabase.find(
    user =>
      enteredUsername === user.username && enteredPassword === user.password
  );

  if (user) {
    validLogin(user);
  } else {
    invalidLogin();
    setTimeout(() => {
      defaultLogin();
    }, 1500);
  }
};

const registerEventListeners = () => {
  loginForm.addEventListener('submit', validateLogin);
  usernameInputEl.addEventListener('blur', validateUserInput);
  passwordInputEl.addEventListener('blur', validateUserInput);
};

const initPage = () => {
  validateUser();
  registerEventListeners();
};

initPage();
