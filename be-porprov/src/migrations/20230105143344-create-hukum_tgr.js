'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hukum_tgr', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      id_jadwal: {
        type: Sequelize.UUID,
        references:{
          model:"jadwal_tgr",
          key:"id"
        }
      },
      id_peserta: {
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      hukum1: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      hukum2: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      hukum3: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      hukum4: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      hukum5: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      hukum6: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
      },
      total: {
        type: DataTypes.DOUBLE,
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
    await queryInterface.dropTable('hukum_tgr');
  }
};