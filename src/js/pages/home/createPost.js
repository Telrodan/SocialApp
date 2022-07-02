'use strict';

import saveNewPost from '../../API/posts/saveNewPost.js';
import getUser from '../../API/user/getUser.js';
import navbar from '../../components/navbar.js';
import sidebar from '../../components/sidebar.js';
import navigateUser from '../../utils/user/navigateUser.js';

const createPostFormEl = document.getElementById('createPostForm');

const createNewPost = async e => {
  e.preventDefault();
  const user = await getUser();
  const username = user.username;
  const currentDate = new Date().toDateString();
  const currentTime = new Date().toLocaleTimeString();
  const enteredPostTitle = document.getElementById('postTitle').value;
  const enteredPost = document.getElementById('postBody').value;

  const post = {
    id: uuidv4(),
    title: enteredPostTitle,
    body: enteredPost,
    user: username,
    likes: 0,
    date_posted: `${currentTime}, ${currentDate}`,
  };

  saveNewPost(post);
  navigateUser('/src/pages/home/home.html');
};

const registerEventListeners = () => {
  createPostFormEl.addEventListener('submit', createNewPost);
};

const initPage = () => {
  navbar();
  sidebar();
  registerEventListeners();
};

initPage();
