'use strict'

module.exports = {
  // 生成jwt字符串，信息有用户id和用户名
  generateJWT(id, username) {
    const { config } = this
    const token = this.jwt.sign({ id, username }, config.jwt.secret)
    return token
  },
  // 验证jwt字符串
  verifyToken(ctx) {
    const { config } = this
    const token = config.jwt.getToken(ctx)
    if(!token) return null
    return this.jwt.verify(token, config.jwt.secret)
  },
  // 获取用户信息
  getUserJson(user, ctx) {
    user = user.get()
    const {config} = this
    let token = config.jwt.getToken(ctx)
    if(!token) {
      token = `Bearer ${this.generateJWT(user.id, user.username)}`
    }
    return {
      username: user.username,
      token,
      email: user.email,
      image: user.image || null,
      livecode: user.livecode,
    }
  }
}