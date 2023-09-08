'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jadwal_seni', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      event_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"event",
          key:"id"
        }
      },
      partai:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_peserta_biru: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      id_peserta_merah: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      kategori:{
        allowNull: false,
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.ENUM('PUTRA','PUTRI')
      },
      golongan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      babak: {
        allowNull: false,
        type: Sequelize.STRING
      },
      selesai: {
        type: Sequelize.BOOLEAN
      },
      aktif: {
        type: Sequelize.BOOLEAN
      },
      id_pemenang: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model:"peserta_seni",
          key:"id"
        }
      },
      id_nilai_biru: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model:"detail_nilai_seni",
          key:"id"
        }
      },
      id_nilai_merah: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model:"detail_nilai_seni",
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
    await queryInterface.dropTable('jadwal_seni');
  }
};