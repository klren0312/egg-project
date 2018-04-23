'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('/user/login', controller.user.login)
  // 注册
  router.post('/user', controller.user.register)
  // 查询所有用户
  router.get('/user',app.jwt, controller.user.getAllUser)
  // 更新用户信息
  router.put('/user', app.jwt, controller.user.updateUser)
};
