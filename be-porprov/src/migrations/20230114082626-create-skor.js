'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('skor', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        type: Sequelize.UUID,
        references: {
          model: "jadwal_tgr",
          key:"id"
        }
      },
      id_peserta: {
        type: Sequelize.UUID,
        references: {
          model: "peserta_seni",
          key:"id"
        }
      },
      waktu: {
        type: Sequelize.STRING
      },
      median: {
        type: Sequelize.STRING
      },
      skor_akhir: {
        type: Sequelize.STRING
      },
      deviasi: {
        type: Sequelize.DOUBLE
      },
      selesai: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('skor');
  }
};