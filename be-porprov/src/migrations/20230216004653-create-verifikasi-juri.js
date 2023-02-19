'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('verifikasi_juri', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        type: Sequelize.UUID,
        allowNull: false,
        references:{
          model:"jadwal_tanding",
          key:"id"
        }
      },
      show: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
      },
      poin: {
        type: Sequelize.ENUM('Jatuhan', 'Hukuman')
      },
      juri1: {
        type: Sequelize.ENUM('biru','tidak_sah','merah')
      },
      juri2: {
        type: Sequelize.ENUM('biru','tidak_sah','merah')
      },
      juri3: {
        type: Sequelize.ENUM('biru','tidak_sah','merah')
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
    await queryInterface.dropTable('verifikasi_juri');
  }
};