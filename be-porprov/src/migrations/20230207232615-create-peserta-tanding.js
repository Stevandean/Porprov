'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peserta_tanding', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      kelas: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.ENUM('PUTRA','PUTRI')
      },
      golongan: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      kontingen: {
        type: Sequelize.STRING
      },
      kota: {
        type: Sequelize.STRING
      },
      umur: {
        type: Sequelize.INTEGER
      },
      tinggi_badan: {
        type: Sequelize.INTEGER
      },
      berat_badan: {
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
    await queryInterface.dropTable('peserta_tanding');
  }
};