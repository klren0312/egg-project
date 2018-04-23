'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * 用户登录
   */
  async login() {
    const {ctx, app} = this
    const user = ctx.request.body.user
    const {email, password} = user
    // 校验邮箱和密码格式以及是否为空
    ctx.validate({
      email: {type:'email', required:true},
      password: {type:'string', required: true}
    }, user)
    const existUser = await ctx.service.user.findByEmail(email)
    if(!ctx.helper.bcompare(password, existUser.password)) {
      ctx.status = 400
      ctx.body = {
        error: 'password is invalid'
      }
      return
    }
    ctx.body = {
      user: app.getUserJson(existUser, ctx)
    }
  }
  /**
   * 用户注册
   */
  async register() {
    const { ctx, app } = this;
    const user = ctx.request.body.user;
    // 校验邮箱，用户名，密码是否为空且格式是否正确
    ctx.validate({
      email: { type: 'email', required: true },
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
    }, user);

    const email = user.email;
    const password = ctx.helper.bhash(user.password);
    const { username } = user;
    const livecode = username
    const newUser = {
      username,
      email,
      password,
      livecode
    };

    const result = await ctx.service.user.create(newUser);
    console.log(result)
    ctx.status = 201;
    ctx.body = {
      user: app.getUserJson(result, ctx),
    };
  }
  /**
   * 查询所有用户
   */
  async getAllUser() {
    const {ctx,app} = this
    const result = await ctx.service.user.all()
    ctx.body = {
      all: result
    }
  }
  /**
   * 更新用户信息
   */
  async updateUser() {
    const {ctx,app} = this
    const value = ctx.request.body
    const id = app.verifyToken(ctx).id
    const result = await ctx.service.user.update(value, id)
    ctx.body = {
      auth: result
    }
  }
}

module.exports = UserController;
