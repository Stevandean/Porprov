'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_nilai_seni', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      hukuman: {
        type: Sequelize.FLOAT
      },
      kebenaran: {
        type: Sequelize.FLOAT
      },
      waktu: {
        type: Sequelize.STRING
      },
      median: {
        type: Sequelize.STRING
      },
      deviasi: {
        type: Sequelize.DOUBLE
      },
      skor_akhir: {
        type: Sequelize.FLOAT
      },
      selesai: {
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
    await queryInterface.dropTable('detail_nilai_seni');
  }
};