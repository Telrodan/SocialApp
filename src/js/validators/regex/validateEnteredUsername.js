'use strict';

const validateEnteredUsername = username => /^[a-zA-Z0-9]{5,}$/.test(username);

export default validateEnteredUsername;
