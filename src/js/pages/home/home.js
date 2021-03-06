'use strict';

import getUser from '../../API/user/getUser.js';
import navbar from '../../components/navbar.js';
import sidebar from '../../components/sidebar.js';
import handleFeedback from '../../utils/posts/handleFeedback.js';
import renderHomePosts from '../../utils/posts/renderHomePosts.js';

const welcomeUser = async () => {
  const welcomeUserEl = document.getElementById('welcomeUser');
  const user = await getUser();
  const userName = user.username;
  welcomeUserEl.innerText = userName;
};

const registerEventListeners = () => {
  document.addEventListener('click', handleFeedback);
};

const initPage = () => {
  navbar();
  sidebar();
  welcomeUser();
  renderHomePosts();
  registerEventListeners();
};

initPage();
