'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peserta_seni', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      event_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"event",
          key:"id"
        }
      },
      kategori: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.ENUM('PUTRA','PUTRI')
      },
      golongan: {
        type: Sequelize.STRING
      },
      nama1: {
        type: Sequelize.STRING
      },
      nama2: {
        type: Sequelize.STRING
      },
      nama3: {
        type: Sequelize.STRING
      },
      kontingen: {
        type: Sequelize.STRING
      },
      gugur: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('peserta_seni');
  }
};