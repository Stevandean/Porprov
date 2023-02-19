'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_jatuhan', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_poin: {
        type: Sequelize.UUID,
        references: {
          model: "poin",
          key:"id"
        }
      },
      poin: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('log_jatuhan');
  }
};