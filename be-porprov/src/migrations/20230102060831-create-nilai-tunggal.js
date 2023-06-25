'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nilai_tunggal', {
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
      jurus1: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus2: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus3: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus4: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus5: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus6: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus7: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus8: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus9: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus10: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus11: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus12: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus13: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      jurus14: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      skor_a: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      skor_b: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      total_skor: {
        allowNull: false,
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
    await queryInterface.dropTable('nilai_tunggal');
  }
};