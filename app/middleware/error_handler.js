'use strict'

module.exports = ( option, app ) => {
  // 中间件的配置项，框架将 app.config[${middlewareName}]传递进来
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在app上触发一个error事件， 框架会记录一条错误日志
      app.emit('error', err, this)
      const status = err.status || 500
      // 生产环境时， 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message
      // 将错误返回
      ctx.body = {error}
      // 若为422，则将错误返回
      if(status === 422) {
        ctx.body.detail = err.errors
      }
      ctx.status = status
    }
  }
}