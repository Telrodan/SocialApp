"use strict";

import { validateUserInput } from "../validators/formValidators.js";

const formInputs = document.querySelectorAll("input");

formInputs.forEach((input) => input.addEventListener("blur", validateUserInput));
