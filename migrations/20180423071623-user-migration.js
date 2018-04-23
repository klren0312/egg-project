'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const { STRING, DATE, INTEGER } = Sequelize
   return queryInterface.createTable('user', {
     id: {
       primaryKey: true,
       type: INTEGER,
       autoIncrement: true,
     },
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
    livecode: STRING,
    createdAt: DATE,
    updatedAt: DATE,
   })
  },

  down: function (queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('user')
  }
};
