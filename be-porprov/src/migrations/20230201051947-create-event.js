'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('event', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      event: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      icon1: {
        type: Sequelize.STRING
      },
      icon2: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('event');
  }
};