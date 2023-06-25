'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gelanggang', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      event_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model:"event",
          key:"id"
        }
      },
      gelanggang: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('PUTRA','PUTRI')
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
    await queryInterface.dropTable('gelanggang');
  }
};