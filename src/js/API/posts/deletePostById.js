'use strict';

import navigateUser from '../../utils/user/navigateUser.js';

const deletePostById = async id => {
  const res = await fetch('http://localhost:3004/posts/' + id, {
    method: 'DELETE',
  });

  navigateUser('/src/pages/home/home.html');
};

export default deletePostById;
