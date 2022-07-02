'use strict';

const sidebar = () => {
  const sidebarEl = document.getElementById('sidebar');
  const template = `
      <a href="/src/pages/home/home.html" class="sidebar__link"><i class="fa-solid fa-house fa-fw sidebar__icon"></i> Home</a>
      <a href="/src/pages/news.html" class="sidebar__link"><i class="fa-solid fa-newspaper fa-fw sidebar__icon"></i> News</a>
      <a href="#" class="sidebar__link"><i class="fa-solid fa-message fa-fw sidebar__icon"></i> Messages</a>
      <a href="#" class="sidebar__link"><i class="fa-solid fa-user-group fa-fw sidebar__icon"></i> Friends</a>
      <a href="#" class="sidebar__link"><i class="fa-solid fa-list fa-fw sidebar__icon"></i> Task List</a>
      <a href="#" class="sidebar__link"><i class="fa-brands fa-btc fa-fw sidebar__icon"></i> Crypto</a>
      <a href="#" class="sidebar__link"><i class="fa-solid fa-book fa-fw sidebar__icon"></i> Blog</a>
  `;

  sidebarEl.innerHTML = template;
};

export default sidebar;
