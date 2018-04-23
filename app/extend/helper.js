'use strict'
const bcrypt = require('bcryptjs')
// 加密
exports.bhash = str => {
  return bcrypt.hashSync(str, 10)
}
// 对比
exports.bcompare = (str,hash) => {
  return bcrypt.compareSync(str, hash)
}