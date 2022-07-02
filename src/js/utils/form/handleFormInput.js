'use strict';

const handleFormInput = (selector, el) => {
  if (selector === 'valid') {
    el.classList.add('form__input--valid');
    el.classList.remove('form__input--invalid');
  } else if (selector === 'invalid') {
    el.classList.add('form__input--invalid');
    el.classList.remove('form__input--valid');
  } else if (selector === 'default') {
    el.classList.remove('form__input--invalid', 'form__input--valid');
  } else {
    console.log('Error. Selector not valid.');
  }
};

export default handleFormInput;
