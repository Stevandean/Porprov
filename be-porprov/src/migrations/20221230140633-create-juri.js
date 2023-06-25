'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('juri', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      role_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references:{
          model:"roles",
          key:"id"
        }
      },
      event_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"event",
          key:"id"
        }
      },
      no: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('juri');
  }
};