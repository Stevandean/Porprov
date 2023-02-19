'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('timer_seni', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        type: Sequelize.UUID,
        allowNull: false,
        references:{
          model:"jadwal_tgr",
          key:"id"
        }
      },
      id_peserta: {
        type: Sequelize.UUID,
        allowNull: false,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      running: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      start: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('timer_senis');
  }
};