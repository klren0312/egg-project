'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524466636295_1131';

  // add your config here
  config.middleware = ['errorHandler', 'notfoundHandler'];
  // jwt插件
  config.jwt = {
    secret: '123456',
    getToken(ctx) {
      if (
        ctx.headers.authorization &&
        (ctx.headers.authorization.split(' ')[0] === 'Bearer' ||
        ctx.headers.authorization.split(' ')[0] === 'Token')
      ) {
        return ctx.headers.authorization.split(' ')[1]
      } else if (ctx.query && ctx.query.token) {
        return ctx.query.token
      }
      return null
    }
  }
  // sequelize插件
  config.sequelize = {
    dialect: 'mysql',
    database: 'live',
    host: '118.89.188.40',
    port: '3306',
    username: 'root',
    password: 'klren0312',
    timezone: '+08:00'
  }
  // security插件
  config.security = {
    csrf: {
      enable: false,
    },
  }
  return config;
};
