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
      babak: {
        type: Sequelize.INTEGER
      },
      id_poin_merah: {
        type: Sequelize.UUID,
        references: {
          model: "poin",
          key:"id"
        }
      },
      id_poin_biru: {
        type: Sequelize.UUID,
        references: {
          model: "poin",
          key:"id"
        }
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
    await queryInterface.dropTable('nilai_tanding');
  }
};