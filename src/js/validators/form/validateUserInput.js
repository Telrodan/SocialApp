'use strict';

import validateEnteredUsername from '../regex/validateEnteredUsername.js';
import validateEnteredPassword from '../regex/validateEnteredPassword.js';
import validateEnteredEmail from '../regex/validateEnteredEmail.js';
import validateEnteredPhoneNumber from '../regex/validateEnteredPhoneNumber.js';
import setFormMessage from '../../utils/form/setFormMessage.js';
import handleFormInput from '../../utils/form/handleFormInput.js';

function validateUserInput(e) {
  const self = this;
  const inputName = self.id;

  if (self.value.trim() === '') {
    setFormMessage('default');
    handleFormInput('default', self);
    return;
  }

  if (inputName === 'username') {
    if (validateEnteredUsername(self.value)) {
      setFormMessage('default');
      handleFormInput('valid', self);
    } else {
      handleFormInput('invalid', self);
      if (window.location.pathname === '/src/pages/register.html') {
        setFormMessage('invalid', 'Username must be at least 5 characters.');
        handleFormInput('invalid', self);
      }
    }
  } else if (inputName === 'password') {
    if (validateEnteredPassword(self.value)) {
      setFormMessage('default');
      handleFormInput('valid', self);
    } else {
      handleFormInput('invalid', self);
      if (window.location.pathname === '/src/pages/register.html') {
        setFormMessage(
          'invalid',
          'Password must be at least 8 characters and contain numbers and letters.'
        );
      }
    }
  } else if (inputName === 'email') {
    if (validateEnteredEmail(self.value)) {
      setFormMessage('default');
      handleFormInput('valid', self);
    } else {
      setFormMessage('invalid', 'Not valid e-mail address.');
      handleFormInput('invalid', self);
    }
  } else if (inputName === 'phoneNumber') {
    if (validateEnteredPhoneNumber(self.value)) {
      setFormMessage('default');
      handleFormInput('valid', self);
    } else {
      setFormMessage('invalid', 'Correct format: +XX XXXXXXX');
      handleFormInput('invalid', self);
    }
  } else if (inputName === 'confirmPassword') {
    const enteredPassword = document.getElementById('password').value;

    if (enteredPassword === self.value) {
      setFormMessage('default');
      handleFormInput('valid', self);
    } else {
      setFormMessage('invalid', "Password doesn't match.");
      handleFormInput('invalid', self);
    }
  }
}

export default validateUserInput;
