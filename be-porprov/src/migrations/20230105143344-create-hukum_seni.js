'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hukum_seni', {
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
      hukum1: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      hukum2: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      hukum3: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      hukum4: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      hukum5: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      hukum6: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      total: {
        type: Sequelize.FLOAT,
        defaultValue: 0
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
    await queryInterface.dropTable('hukum_seni');
  }
};