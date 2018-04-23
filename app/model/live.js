'use strict'
module.exports = app => {
  const { STRING,INTEGER } = app.Sequelize
  const User = app.model.define('user', {
    roomname: {
      type: STRING,
      allowNull: false,
    },
    gift: INTEGER,
    peonum: INTEGER,
    livecode: {
      type: STRING,
      allowNull: false
    },
    liveurl: STRING,
    usecustom: INTEGER,
    active: {
      type: INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'live',
    underscored: false,
  })
}