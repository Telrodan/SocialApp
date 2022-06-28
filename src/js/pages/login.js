"use strict";

import navigateUser from "../utils/navigateUser.js";
import { getUserDatabase } from "../API/user.js";
import {
	validateUserInput,
	validInput,
	invalidInput,
	defaultInput,
} from "../validators/formValidators.js";

const loginForm = document.getElementById("loginForm");
const formMessage = document.getElementById("formMessage");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const setFormMessage = (selector, message) => {
	if (selector === "valid") {
		formMessage.classList.add("form__message--valid");
		formMessage.classList.remove("form__message--invalid");
		formMessage.innerText = message;
	} else if (selector === "invalid") {
		formMessage.classList.add("form__message--invalid");
		formMessage.classList.remove("form__message--valid");
		formMessage.innerText = message;
	} else if (selector === "default") {
		formMessage.classList.remove("form__message--valid", "form__message--invalid");
	} else {
		console.log("Error. Selector not valid.");
	}
};

const succesfullLogin = () => {
	setFormMessage("valid", "Succesfull login.");
	validInput(usernameInput);
	validInput(passwordInput);
	navigateUser("/src/pages/home.html", 1500);
};

const invalidLogin = () => {
	setFormMessage("invalid", "Invalid login details.");
	invalidInput(usernameInput);
	invalidInput(passwordInput);
};

const defaultLogin = () => {
	setFormMessage("default", "");
	defaultInput(usernameInput);
	defaultInput(passwordInput);
};

const validateLogin = async (e) => {
	e.preventDefault();

	const userDatabase = await getUserDatabase();
	const enteredUsername = usernameInput.value;
	const enteredPassword = passwordInput.value;
	const user = userDatabase.find(
		(user) => enteredUsername === user.username && enteredPassword === user.password
	);

	if (user) {
		succesfullLogin();
	} else {
		invalidLogin();
		setTimeout(() => {
			defaultLogin();
		}, 1500);
	}
};

loginForm.addEventListener("submit", validateLogin);
usernameInput.addEventListener("blur", validateUserInput);
passwordInput.addEventListener("blur", validateUserInput);
