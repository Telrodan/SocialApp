'use strict';

const getUserDatabase = async () => {
  const users = 'http://localhost:3004/users';
  const res = await fetch(users);
  const userDatabase = await res.json();
  return userDatabase;
};

export default getUserDatabase;
