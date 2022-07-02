'use strict';

const validateEnteredEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default validateEnteredEmail;
