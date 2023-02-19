'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('timer_tanding', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        type: Sequelize.UUID,
        references:{
          model:"jadwal_tanding",
          key:"id"
        }
      },
      babak: {
        type: Sequelize.STRING,
        allowNull: false
      },
      running: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      start: {
        type: Sequelize.DATE,
        allowNull: true
      },
      total_pause: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      finish: {
        type: Sequelize.DATE,
        allowNull: true
      },
      selesai: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
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
    await queryInterface.dropTable('timer_tanding');
  }
};