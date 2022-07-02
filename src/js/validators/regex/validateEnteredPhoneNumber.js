'use strict';

const validateEnteredPhoneNumber = phoneNumber =>
  /^(\+\d{2}\s)?\d{7}$/.test(phoneNumber);

export default validateEnteredPhoneNumber;
