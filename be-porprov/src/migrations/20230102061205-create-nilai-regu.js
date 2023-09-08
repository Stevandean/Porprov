'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nilai_regu', {
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
        type: Sequelize.FLOAT
      },
      jurus2: {
        type: Sequelize.FLOAT
      },
      jurus3: {
        type: Sequelize.FLOAT
      },
      jurus4: {
        type: Sequelize.FLOAT
      },
      jurus5: {
        type: Sequelize.FLOAT
      },
      jurus6: {
        type: Sequelize.FLOAT
      },
      jurus7: {
        type: Sequelize.FLOAT
      },
      jurus8: {
        type: Sequelize.FLOAT
      },
      jurus9: {
        type: Sequelize.FLOAT
      },
      jurus10: {
        type: Sequelize.FLOAT
      },
      jurus11: {
        type: Sequelize.FLOAT
      },
      jurus12: {
        type: Sequelize.FLOAT
      },
      skor_a: {
        type: Sequelize.FLOAT
      },
      skor_b: {
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
    await queryInterface.dropTable('nilai_regu');
  }
};