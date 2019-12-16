'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.all('/user', controller.user.index);
  router.get('*', controller.home.index);
};
