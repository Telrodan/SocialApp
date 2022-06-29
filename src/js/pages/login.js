"use strict";

import { getUserDatabase } from "../API/user.js";
import verifyUser from "../utils/user/verifyUser.js";
import navigateUser from "../utils/user/navigateUser.js";
import setFormMessage from "../utils/form/setFormMessage.js";
import {
	validateUserInput,
	validInput,
	invalidInput,
	defaultInput,
} from "../validators/formValidators.js";

const loginForm = document.getElementById("loginForm");
const usernameInputEl = document.getElementById("username");
const passwordInputEl = document.getElementById("password");

const validLogin = () => {
	verifyUser(user);
	navigateUser("/src/pages/home.html", 1500);
	setFormMessage("valid", "Succesfull login.");
	validInput(usernameInputEl);
	validInput(passwordInputEl);
};

const invalidLogin = () => {
	setFormMessage("invalid", "Invalid login details.");
	invalidInput(usernameInputEl);
	invalidInput(passwordInputEl);
};

const defaultLogin = () => {
	setFormMessage("default");
	defaultInput(usernameInputEl);
	defaultInput(passwordInputEl);
};

const validateLogin = async (e) => {
	e.preventDefault();

	const userDatabase = await getUserDatabase();
	const enteredUsername = usernameInputEl.value;
	const enteredPassword = passwordInputEl.value;
	const user = userDatabase.find(
		(user) => enteredUsername === user.username && enteredPassword === user.password
	);

	if (user) {
		validLogin();
	} else {
		invalidLogin();
		setTimeout(() => {
			defaultLogin();
		}, 1500);
	}
};

const registerEventListeners = () => {
	loginForm.addEventListener("submit", validateLogin);
	usernameInputEl.addEventListener("blur", validateUserInput);
	passwordInputEl.addEventListener("blur", validateUserInput);
};

registerEventListeners();
