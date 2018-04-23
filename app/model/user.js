'use strict'
module.exports = app => {
  const {STRING} = app.Sequelize
  const User = app.model.define('user', {
    username: {
      type: STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){1,19}$/i,
        isLowercase: true,
      }
    },
    email: {
      type: STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    image: STRING,
    livecode: STRING
  }, {
    timestamps: true,
    tableName: 'user',
    underscored: false,
  })

  // User.associate = function() {
  //   app.model.User.hasMany(app.model.Follow, { foreignKey: 'userId'})
  // }

  return User
}