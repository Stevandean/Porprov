'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_poin_juri3', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_poin: {
        type: Sequelize.UUID,
        references: {
          model: "poin",
          key:"id"
        }
      },
      id_juri: {
        type: Sequelize.UUID,
        references: {
          model: "juri",
          key:"id"
        }
      },
      sudut: {
        type: Sequelize.ENUM('biru','merah')
      },
      poin: {
        type: Sequelize.INTEGER
      },
      masuk: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
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
    await queryInterface.dropTable('log_poin_juri3');
  }
};