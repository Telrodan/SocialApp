'use strict';

const saveHomePostById = async (id, post) => {
  await fetch('http://localhost:3004/posts/' + id, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json' },
  });
};

export default saveHomePostById;
