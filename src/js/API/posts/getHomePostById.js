'use strict';

import getHomePosts from './getHomePosts.js';

const getHomePostById = async id => {
  const posts = await getHomePosts();
  let post = posts.filter(post => post.id === id);
  post = post[0];
  return post;
};

export default getHomePostById;
