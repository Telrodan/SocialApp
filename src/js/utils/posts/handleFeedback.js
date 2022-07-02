'use strict';

import getHomePostById from '../../API/posts/getHomePostById.js';
import saveHomePostById from '../../API/posts/saveHomePostById.js';

const handleFeedback = async e => {
  const feedbackValue = e.target.getAttribute('value');
  const likesEl = e.target.parentElement.parentElement.childNodes[7];

  if (feedbackValue === 'like' || feedbackValue === 'dislike') {
    const id = e.target.parentElement.parentElement.id;
    const post = await getHomePostById(id);
    if (feedbackValue === 'like') {
      post.likes++;
    } else {
      if (post.likes === 0) return;
      post.likes--;
    }

    likesEl.textContent = `${post.likes} likes`;

    saveHomePostById(id, post);
  }
};

export default handleFeedback;
