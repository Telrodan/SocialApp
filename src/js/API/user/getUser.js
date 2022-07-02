"use strict";

import getUserDatabase from "./getUserDatabase.js";

const getUser = async () => {
	const userID = JSON.parse(localStorage.getItem("userID"));
	const userDatabase = await getUserDatabase();
	const user = userDatabase.find((user) => userID === user.id);
	return user;
};

export default getUser;
