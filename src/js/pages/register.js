'use strict';

import saveNewUser from '../API/user/saveNewUser.js';
import setFormMessage from '../utils/form/setFormMessage.js';
import validateRegisterForm from '../validators/form/validateRegisterForm.js';
import navigateUser from '../utils/user/navigateUser.js';
import validateUserInput from '../validators/form/validateUserInput.js';
import validateUser from '../utils/user/validateUser.js';

const registerForm = document.getElementById('registerForm');
const formInputs = document.querySelectorAll('input');

const validRegistration = () => {
  setFormMessage('valid', 'Succesfull registration, please login.');
  navigateUser('/src/pages/login.html', 2000);
};

const invalidRegistration = () => {
  setFormMessage('invalid', 'Invalid details.');
  setTimeout(() => {
    setFormMessage('default');
  }, 1500);
};

const handleRegisterForm = async e => {
  e.preventDefault();

  if (!validateRegisterForm(formInputs)) {
    invalidRegistration();
    return;
  }

  const newUser = {
    id: uuidv4(),
    username: formInputs[0].value,
    email: formInputs[1].value,
    phone_number: formInputs[2].value,
    password: formInputs[3].value,
  };

  await saveNewUser(newUser);

  validRegistration();
};

const registerEventListeners = () => {
  formInputs.forEach(input =>
    input.addEventListener('blur', validateUserInput)
  );
  registerForm.addEventListener('submit', handleRegisterForm);
};

const initPage = () => {
  validateUser();
  registerEventListeners();
};

initPage();
