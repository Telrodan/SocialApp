"use strict";

//REGEX
const validateEnteredUsername = (username) => /^[a-zA-Z0-9]{5,}$/.test(username);
const validateEnteredPassword = (password) =>
	/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

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

export function validateUserInput() {
	const self = this;
	const inputName = self.id;

	if (inputName === "username") {
		if (self.value.trim() === "") {
			defaultInput(self);
		} else {
			if (validateEnteredUsername(self.value)) {
				validInput(self);
			} else {
				invalidInput(self);
			}
		}
	} else if (inputName === "password") {
		if (self.value.trim() === "") {
			defaultInput(self);
		} else {
			if (validateEnteredPassword(self.value)) {
				validInput(self);
			} else {
				invalidInput(self);
			}
		}
	}
}
