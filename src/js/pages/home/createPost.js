"use strict";

import saveNewPost from "../../API/posts/saveNewPost.js";
import getUser from "../../API/user/getUser.js";
import navbar from "../../components/navbar.js";
import sidebar from "../../components/sidebar.js";
import navigateUser from "../../utils/user/navigateUser.js";

const createNewPost = async (e) => {
	e.preventDefault();
	const enteredPostTitle = document.getElementById("postTitle").value;
	const enteredPost = document.getElementById("postBody").value;
	const currentDate = new Date().toDateString();
	const currentTime = new Date().toLocaleTimeString();
	const user = await getUser();

	const post = {
		id: uuidv4(),
		title: enteredPostTitle,
		body: enteredPost,
		user: user.username,
		likes: 0,
		date_posted: `${currentTime}, ${currentDate}`,
	};

	saveNewPost(post);
	navigateUser("/src/pages/home/home.html");
};

document.getElementById("createPostForm").addEventListener("submit", createNewPost);
navbar();
sidebar();
