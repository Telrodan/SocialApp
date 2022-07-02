'use strict';

const setFormMessage = (selector, message = '') => {
  const formMessageEl = document.getElementById('formMessage');

  if (selector === 'valid') {
    formMessageEl.classList.add('form__message--valid');
    formMessageEl.classList.remove('form__message--invalid');
    formMessageEl.innerText = message;
  } else if (selector === 'invalid') {
    formMessageEl.classList.add('form__message--invalid');
    formMessageEl.classList.remove('form__message--valid');
    formMessageEl.innerText = message;
  } else if (selector === 'default') {
    formMessageEl.classList.remove(
      'form__message--valid',
      'form__message--invalid'
    );
  } else {
    console.log('Error. Selector not valid.');
  }
};

export default setFormMessage;
