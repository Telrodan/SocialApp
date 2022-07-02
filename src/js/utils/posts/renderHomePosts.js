"use strict";

import getHomePosts from "../../API/posts/getHomePosts.js";

const renderHomePosts = async () => {
	console.log("render posts");
	const posts = await getHomePosts();
	console.log("after getposts");
	const homePostsContainer = document.getElementById("homePostsContainer");
	let template = "";
	posts.forEach((post) => {
		console.log("rendering posts");
		template += `
              <div class="home-post" id="${post.id}">
							  <h2 class="home-post__title">${post.title}</h2>
							  <p class="home-post__preview-body">${post.body.slice(0, 200)}</p>
                <a href="/pages/apps/posts/details.html?id=${
									post.id
								}" class="home-post__read-more">Read more<i
									  class="fa-solid fa-arrow-right fa-fw"></i></a>
								<p class="home-post__likes">${post.likes} likes</p>
							  <div class="home-post__details">
								  <p class="home-post__details__username">Posted by ${post.user}</p>
								  <p class="home-post__details__time">${post.date_posted}</p>
							  </div>
							  <div class="home-post__feedback">
								  <i class="fa-solid fa-thumbs-up fa-3x home-post__feedback--like feedback-button" value="like"></i>
								  <i class="fa-solid fa-thumbs-down fa-3x home-post__feedback--dislike feedback-button" value="dislike"></i>
							  </div>
              </div>
    `;
		homePostsContainer.innerHTML = template;
	});
};

export default renderHomePosts;
