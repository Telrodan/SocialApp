'use strict';

import navbar from '../components/navbar.js';
import sidebar from '../components/sidebar.js';

const newsContainerEl = document.getElementById('newsContainer');

const gatherNews = async () => {
  const response = await fetch(
    'https://saurav.tech/NewsAPI/everything/cnn.json'
  );
  const news = await response.json();
  return news;
};

const renderNews = async () => {
  const news = await gatherNews();
  let template = '';
  news.articles.forEach(article => {
    template += `
      <div class="news__card">
        <h2 class="news__card__title">${article.title}</h2>
        <img class="news__card__image" src="${article.urlToImage}">
        <p class="news__card__description">${article.description}</p>
        <a class="news__card__link" href="${article.url}">Read More</a>
      </div>
    `;
    newsContainerEl.innerHTML = template;
  });
};

const initPage = () => {
  navbar();
  sidebar();
  renderNews();
};

initPage();
