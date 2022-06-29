"use strict";

import setFormMessage from "../utils/form/setFormMessage.js";

//REGEX
const validateEnteredUsername = (username) => /^[a-zA-Z0-9]{5,}$/.test(username);
const validateEnteredPassword = (password) =>
	/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
const validateEnteredEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateEnteredPhoneNumber = (phoneNumber) => /^(\+\d{2}\s)?\d{7}$/.test(phoneNumber);

//FORM INPUT VALIDATORS
export const validInput = (self) => {
	self.classList.add("form__input--valid");
	self.classList.remove("form__input--invalid");
};

export const invalidInput = (self) => {
	self.classList.add("form__input--invalid");
	self.classList.remove("form__input--valid");
};

export const defaultInput = (self) => {
	self.classList.remove("form__input--invalid", "form__input--valid");
};

export function validateUserInput(e) {
	const self = this;
	const inputName = self.id;

	if (self.value.trim() === "") {
		defaultInput(self);
		setFormMessage("default");
		return;
	}

	if (inputName === "username") {
		if (validateEnteredUsername(self.value)) {
			setFormMessage("default");
			validInput(self);
		} else {
			invalidInput(self);
			if (window.location.pathname === "/src/pages/register.html") {
				setFormMessage("invalid", "Username must be at least 5 characters.");
				invalidInput(self);
			}
		}
	} else if (inputName === "password") {
		if (validateEnteredPassword(self.value)) {
			setFormMessage("default");
			validInput(self);
		} else {
			invalidInput(self);
			if (window.location.pathname === "/src/pages/register.html") {
				setFormMessage(
					"invalid",
					"Password must be at least 8 characters and contain numbers and letters."
				);
			}
		}
	} else if (inputName === "email") {
		if (validateEnteredEmail(self.value)) {
			setFormMessage("default");
			validInput(self);
		} else {
			setFormMessage("invalid", "Not valid e-mail address.");
			invalidInput(self);
		}
	} else if (inputName === "phoneNumber") {
		if (validateEnteredPhoneNumber(self.value)) {
			setFormMessage("default");
			validInput(self);
		} else {
			setFormMessage("invalid", "Correct format: +XX XXXXXXX");
			invalidInput(self);
		}
	} else if (inputName === "confirmPassword") {
		const enteredPassword = document.getElementById("password").value;

		if (enteredPassword === self.value) {
			setFormMessage("default");
			validInput(self);
		} else {
			setFormMessage("invalid", "Password doesn't match.");
			invalidInput(self);
		}
	}
}
