'use strict';

const validateRegisterForm = inputEls => {
  let counter = 0;

  for (let inputEl of inputEls) {
    if (inputEl.classList.contains('form__input--valid')) {
      counter++;
    } else {
      break;
    }
  }

  if (counter === 5) {
    return true;
  } else {
    return false;
  }
};

export default validateRegisterForm;
