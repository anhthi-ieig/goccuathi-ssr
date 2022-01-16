const routes = require('next-routes-extended');

module.exports = routes()
  .add({
    name: 'home',
    pattern: '/',
  })
  .add({
    name: 'sign-in',
    pattern: '/sign-in',
  })
  .add({
    name: 'dashboard',
    pattern: '/dashboard',
  });
