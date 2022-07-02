import logoutUser from "../utils/user/logoutUser.js";
import validateUser from "../utils/user/validateUser.js";

const navbar = () => {
	const navbarEl = document.getElementById("navbar");
	if (validateUser()) {
		const template = `
      <div class="navbar__logo-box">
        <i class="fa-brands fa-bandcamp navbar__logo"></i>
        <p class="navbar__name">Social<span class="navbar__name-span">App</span></p>
      </div>
      <nav class="navbar__navigation">
        <a href="#" class="navbar__link button button--white">Account</a>
        <a href="#" class="navbar__link button button--white" id="logout">Logout</a>
      </nav>
  `;
		navbarEl.innerHTML = template;
		document.getElementById("logout").addEventListener("click", logoutUser);
	} else {
		const template = `
      <div class="navbar__logo-box">
        <i class="fa-brands fa-bandcamp navbar__logo"></i>
        <p class="navbar__name">Social<span class="navbar__name-span">App</span></p>
      </div>
      <nav class="navbar__navigation">
        <a href="src/pages/login.html" class="navbar__link button button--white">Login</a>
        <a href="src/pages/register.html" class="navbar__link button button--white">Register</a>
      </nav>
  `;
		navbarEl.innerHTML = template;
	}
};

export default navbar;
