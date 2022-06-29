"use strict";

const validateEnteredPassword = (password) =>
	/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

export default validateEnteredPassword;
