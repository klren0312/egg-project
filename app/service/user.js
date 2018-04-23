'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 创建用户
   * @param {*} user 
   */
  async create(user) {
    return await this.ctx.model.User.create(user)
  }
  /**
   * 通过邮箱查询用户
   * @param {*} email 
   */
  async findByEmail(email) {
    const user = await this.ctx.model.User.findOne({where: {email}})
    if(!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }
  /**
   * 通过用户名查询用户
   * @param {*} username 
   */
  async findByUsername(username) {
    const user = await this.ctx.model.User.finOne({where: {username}})
    if(!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }
  /**
   * 通过id查询用户
   * @param {*} id 
   */
  async findById(id) {
    const user = await this.ctx.model.User.finOne({where: {id}})
    if(!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }
  /**
   * 通过id查询用户，随后更新用户信息
   * @param {*} values 
   * @param {*} id 
   */
  async update(values, id) {
    const user = await this.ctx.model.User.findById(id)
    if(!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user.update(values)
  }
  /**
   * 查询所有用户
   */
  async all(){
    const user = await this.ctx.model.User.findAll()
    return user
  }
}

module.exports = UserService;
