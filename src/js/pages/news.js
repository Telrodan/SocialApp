'use strict';

import navbar from '../components/navbar.js';
import sidebar from '../components/sidebar.js';

const newsContainerEl = document.getElementById('newsContainer');
const previousPageButton = document.getElementById('previousPage');
const currentPage = document.getElementById('currentPage');
const nextPageButton = document.getElementById('nextPage');

const gatherNews = async () => {
  const response = await fetch(
    'https://saurav.tech/NewsAPI/everything/cnn.json'
  );
  const news = await response.json();
  return news;
};

const renderNews = news => {
  let template = '';
  news.forEach(article => {
    template += `
      <div class="news__card">
        <h2 class="news__card__title">${article.title}</h2>
        <img class="news__card__image" src="${article.urlToImage}">
        <p class="news__card__description">${article.description}</p>
        <a class="news__card__link" href="${article.url}">Read More 
          <i class="fa-solid fa-arrow-right fa-fw"></i></a>
      </div>
    `;
    newsContainerEl.innerHTML = template;
  });
};

const setNewsListing = async () => {
  const news = await gatherNews();
  const newsPerPage = 10;
  const pages = Math.round(news.articles.length / newsPerPage);
  const getPageId = new URLSearchParams(window.location.search).get('page');
  const pageId = parseInt(getPageId);
  const recentNews = news.articles.slice(
    newsPerPage * pageId - newsPerPage,
    newsPerPage * pageId
  );

  currentPage.innerText = pageId;

  if (pageId === pages) {
    nextPageButton.classList.add('hidden');
  } else if (pageId === 1) {
    previousPageButton.classList.add('hidden');
  }

  renderNews(recentNews);

  previousPageButton.href = `/src/pages/news.html?page=${pageId - 1}`;
  nextPageButton.href = `/src/pages/news.html?page=${pageId + 1}`;
};

const initPage = () => {
  navbar();
  sidebar();
  setNewsListing();
};

initPage();
