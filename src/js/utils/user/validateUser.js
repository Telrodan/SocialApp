"use strict";

import navigateUser from "./navigateUser.js";

const validateUser = () => {
	const userID = JSON.parse(localStorage.getItem("userID"));
	const currentPathname = window.location.pathname;
	const landingPagePath = "/index.html";
	const loginPagePath = "/src/pages/login.html";
	const registerPagePath = "/src/pages/register.html";

	if (userID) {
		if (currentPathname === loginPagePath || currentPathname === registerPagePath) {
			navigateUser("/src/pages/home.html");
			return true;
		} else {
			return true;
		}
	} else if (
		currentPathname === landingPagePath ||
		currentPathname === loginPagePath ||
		currentPathname === registerPagePath
	) {
		return false;
	} else {
		navigateUser("/index.html");
		return false;
	}
};

export default validateUser;
