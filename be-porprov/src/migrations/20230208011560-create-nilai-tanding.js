'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nilai_tanding', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        type: Sequelize.UUID,
        references: {
          model: "jadwal_tanding",
          key:"id"
        }
      },
      id_peserta: {
        type: Sequelize.UUID,
        references: {
          model: "peserta_tanding",
          key:"id"
        }
      },
      poin_masuk: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      jatuhan: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      total_hukum: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      total_poin: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('nilai_tanding');
  }
};