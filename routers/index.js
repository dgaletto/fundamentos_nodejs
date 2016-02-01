'use strict';

var router_main = require('../apps/main/controller'),
    router_user = require('../apps/user/controller'),
    router_book = require('../apps/book/controller'),
    router_admin = require('../apps/admin/controller');

var isLoggedIn = require('../apps/user/middleware').isLoggedIn;

var routers = (server) => {
  server.use('/', router_main);
  server.use('/', router_user);
  server.use('/', router_book);
  server.use('/', isLoggedIn, router_admin);
}

module.exports = routers;
