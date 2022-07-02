'use strict';

const verifyUser = user => {
  localStorage.setItem('userID', JSON.stringify(user.id));
};

export default verifyUser;
