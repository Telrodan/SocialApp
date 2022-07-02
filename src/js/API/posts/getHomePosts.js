const getHomePosts = async () => {
	const posts = "http://localhost:3004/posts?_sort=likes&_order=desc";
	const res = await fetch(posts);
	const homePosts = await res.json();
	return homePosts;
};

export default getHomePosts;
