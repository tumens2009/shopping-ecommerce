'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("files", {
      idProduct: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      path: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      author_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: true,
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
      }}
     
      );
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable("files");
  }
};
