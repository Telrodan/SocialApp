import deletePostById from "../../API/posts/deletePostById.js";
import getUser from "../../API/user/getUser.js";

const renderDetails = async (id) => {
	const res = await fetch("http://localhost:3004/posts/" + id);
	const post = await res.json();
	const postDetailsEl = document.getElementById("postDetails");
	const user = await getUser();

	if (user.username === post.user) {
		const template = `
    <h1 class="post-details__card__title">${post.title}</h1>
    <p class="post-details__card__body">${post.body}</p>
    <a href="/src/pages/home/home.html" class="post-details__card__button button button--white">Back to home</a>
    <button class="post-details__card__button button button--red" id="deletePostButton">Delete post</button>
  `;
		postDetailsEl.innerHTML = template;
	} else {
		const template = `
    <h1 class="post-details__card__title">${post.title}</h1>
    <p class="post-details__card__body">${post.body}</p>
    <a href="/src/pages/home/home.html" class="post-details__card__button button button--white">Back to home</a>
  `;
		postDetailsEl.innerHTML = template;
		return;
	}
	const deletePostButton = document.getElementById("deletePostButton");
	deletePostButton.addEventListener("click", () => {
		deletePostById(id);
	});
};

export default renderDetails;
