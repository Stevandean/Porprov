'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nilai_solo', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"jadwal_seni",
          key:"id"
        }
      },
      id_peserta: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      id_juri: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"juri",
          key:"id"
        }
      },
      nama_juri: {
        allowNull: true,
        type: Sequelize.STRING
      },
      technique: {
        type: Sequelize.FLOAT
      },
      firmness: {
        type: Sequelize.FLOAT
      },
      soulfulness: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
      },
      total_skor: {
        type: Sequelize.FLOAT
      },
      dis: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('nilai_solo');
  }
};