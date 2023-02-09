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
      jurus1: {
        type: Sequelize.DOUBLE
      },
      jurus2: {
        type: Sequelize.DOUBLE
      },
      jurus3: {
        type: Sequelize.DOUBLE
      },
      jurus4: {
        type: Sequelize.DOUBLE
      },
      jurus5: {
        type: Sequelize.DOUBLE
      },
      jurus6: {
        type: Sequelize.DOUBLE
      },
      jurus7: {
        type: Sequelize.DOUBLE
      },
      jurus8: {
        type: Sequelize.DOUBLE
      },
      jurus9: {
        type: Sequelize.DOUBLE
      },
      jurus10: {
        type: Sequelize.DOUBLE
      },
      jurus11: {
        type: Sequelize.DOUBLE
      },
      jurus12: {
        type: Sequelize.DOUBLE
      },
      skor_a: {
        type: Sequelize.DOUBLE
      },
      skor_b: {
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
    await queryInterface.dropTable('nilai_regu');
  }
};