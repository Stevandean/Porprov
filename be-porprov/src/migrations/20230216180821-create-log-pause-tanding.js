'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_pause_tanding', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_timer_tanding: {
        type: Sequelize.UUID,
        references:{
          model:"timer_tanding",
          key:"id"
        }
      },
      start: {
        type: Sequelize.DATE
      },
      finish: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.dropTable('log_pause_tanding');
  }
};