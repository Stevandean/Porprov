'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_jadwal_tanding', {
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
        type: Sequelize.STRING
      },
      id_nilai_merah: {
        type: Sequelize.UUID,
        references: {
          model: "nilai_tanding",
          key:"id"
        }
      },
      id_nilai_biru: {
        type: Sequelize.UUID,
        references: {
          model: "nilai_tanding",
          key:"id"
        }
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
    await queryInterface.dropTable('detail_jadwal_tanding');
  }
};