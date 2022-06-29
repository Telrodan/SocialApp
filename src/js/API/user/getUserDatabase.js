"use strict";

const getUserDatabase = async () => {
	const uri = "http://localhost:3004/users";
	const res = await fetch(uri);
	const userDatabase = await res.json();
	return userDatabase;
};

export default getUserDatabase;
