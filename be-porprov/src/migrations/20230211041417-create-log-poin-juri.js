'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log_poin_juri', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_nilai_tanding: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "nilai_tanding",
          key:"id"
        }
      },
      juri: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      poin: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sudut: {
        allowNull: false,
        type: Sequelize.ENUM('biru','merah')
      },
      babak: {
        allowNull: false,
        type: Sequelize.STRING
      },
      masuk: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      cek_start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cek_end: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('log_poin_juri');
  }
};