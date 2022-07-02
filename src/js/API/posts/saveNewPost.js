const saveNewPost = async (post) => {
	await fetch("http://localhost:3004/posts", {
		method: "POST",
		body: JSON.stringify(post),
		headers: { "Content-Type": "application/json" },
	});
};

export default saveNewPost;
