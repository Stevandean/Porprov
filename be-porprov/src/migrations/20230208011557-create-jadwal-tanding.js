'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jadwal_tanding', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      partai: {
        type: Sequelize.INTEGER
      },
      babak: {
        type: Sequelize.STRING
      },
      gelanggang: {
        type: Sequelize.STRING
      },
      kelas: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.ENUM('PUTRA','PUTRI')
      },
      golongan: {
        type: Sequelize.STRING
      },
      id_merah: {
        type: Sequelize.UUID,
        references: {
          model: "peserta_tanding",
          key:"id"
        }
      },
      id_biru: {
        type: Sequelize.UUID,
        references: {
          model: "peserta_tanding",
          key:"id"
        }
      },
      total_merah: {
        type: Sequelize.INTEGER
      },
      total_biru: {
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
      },
      id_pemenang: {
        type: Sequelize.UUID,
        references: {
          model: "peserta_tanding",
          key:"id"
        }
      },
      selesai: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      aktif: {
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
    await queryInterface.dropTable('jadwal_tanding');
  }
};