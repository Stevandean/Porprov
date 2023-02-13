'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('poin', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_peserta: {
        type: Sequelize.UUID,
        references: {
          model: "peserta_tanding",
          key:"id"
        }
      },
      poin_masuk: {
        type: Sequelize.INTEGER
      },
      jatuhan: {
        type: Sequelize.INTEGER
      },
      total_hukum: {
        type: Sequelize.INTEGER
      },
      total_poin: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('poin');
  }
};