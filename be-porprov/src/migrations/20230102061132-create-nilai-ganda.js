'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nilai_ganda', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        type: Sequelize.UUID,
        references:{
          model:"jadwal_tgr",
          key:"id"
        }
      },
      id_peserta: {
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      id_juri: {
        type: Sequelize.UUID,
        references:{
          model:"juri",
          key:"id"
        }
      },
      nama_juri: {
        type: Sequelize.STRING
      },
      technique: {
        type: Sequelize.DOUBLE
      },
      firmness: {
        type: Sequelize.DOUBLE
      },
      soulfulness: {
        type: Sequelize.DOUBLE
      },
      total: {
        type: Sequelize.DOUBLE
      },
      total_skor: {
        type: Sequelize.DOUBLE
      },
      dis: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('nilai_ganda');
  }
};