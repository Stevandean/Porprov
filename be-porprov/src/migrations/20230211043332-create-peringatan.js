'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('peringatan', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "jadwal_tanding",
          key:"id"
        }
      },
      babak: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sudut: {
        allowNull: false,
        type: Sequelize.STRING
      },
      poin: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('peringatan');
  }
};