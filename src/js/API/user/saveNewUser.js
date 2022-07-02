'use strict';

const saveNewUser = async newUser => {
  await fetch('http://localhost:3004/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: { 'Content-Type': 'application/json' },
  });
};

export default saveNewUser;
