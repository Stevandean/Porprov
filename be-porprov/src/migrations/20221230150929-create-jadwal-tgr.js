'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jadwal_tgr', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      partai:{
        type: Sequelize.INTEGER
      },
      id_biru: {
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      id_merah: {
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      kategori:{
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.ENUM('PUTRA','PUTRI')
      },
      kelas: {
        type: Sequelize.STRING
      },
      babak: {
        type: Sequelize.STRING
      },
      selesai: {
        type: Sequelize.BOOLEAN
      },
      selesai: {
        type: Sequelize.BOOLEAN
      },
      aktif: {
        type: Sequelize.BOOLEAN
      },
      id_pemenang: {
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jadwal_tgr');
  }
};