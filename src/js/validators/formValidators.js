"use strict";

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
		return;
	}

	if (inputName === "username") {
		if (validateEnteredUsername(self.value)) {
			validInput(self);
		} else {
			invalidInput(self);
		}
	} else if (inputName === "password") {
		if (validateEnteredPassword(self.value)) {
			validInput(self);
		} else {
			invalidInput(self);
		}
	} else if (inputName === "email") {
		if (validateEnteredEmail(self.value)) {
			validInput(self);
		} else {
			invalidInput(self);
		}
	} else if (inputName === "phoneNumber") {
		if (validateEnteredPhoneNumber(self.value)) {
			validInput(self);
		} else {
			invalidInput(self);
		}
	} else if (inputName === "confirmPassword") {
		const enteredPassword = document.getElementById("password").value;

		if (enteredPassword === self.value) {
			validInput(self);
		} else {
			invalidInput(self);
		}
	}
}
