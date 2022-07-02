import navigateUser from './navigateUser.js';

const logoutUser = () => {
  localStorage.removeItem('userID');
  navigateUser('/index.html');
};

export default logoutUser;
