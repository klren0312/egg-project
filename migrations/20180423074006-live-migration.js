'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { STRING, INTEGER, DATE } = Sequelize
    return queryInterface.createTable('live',{
      id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
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
      },
      createAt: DATE,
      updateAt: DATE
    })
  },

  down: function (queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('live')
  }
};
