'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peserta_seni', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      waktu: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      },
      gelanggang: {
        type: Sequelize.STRING
      },
      pool: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.ENUM('PUTRA','PUTRI')
      },
      kelas: {
        type: Sequelize.STRING
      },
      nama1: {
        type: Sequelize.STRING
      },
      nama2: {
        type: Sequelize.STRING
      },
      nama3: {
        type: Sequelize.STRING
      },
      kontingen: {
        type: Sequelize.STRING
      },
      gugur: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('peserta_seni');
  }
};