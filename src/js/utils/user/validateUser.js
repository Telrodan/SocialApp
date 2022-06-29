"use strict";

import navigateUser from "./navigateUser.js";

const validateUser = () => {
	const userID = JSON.parse(localStorage.getItem("userID"));

	if (!userID) navigateUser("/index.html");
};

export default validateUser;
