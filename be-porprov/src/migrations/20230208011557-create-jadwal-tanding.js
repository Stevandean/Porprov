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
      event_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model:"event",
          key:"id"
        }
      },
      partai: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      babak: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gelanggang: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kelas: {
        allowNull: false,
        type: Sequelize.STRING
      },
      jk: {
        allowNull: false,
        type: Sequelize.ENUM('PUTRA','PUTRI')
      },
      golongan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_peserta_merah: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "peserta_tanding",
          key:"id"
        }
      },
      id_peserta_biru: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "peserta_tanding",
          key:"id"
        }
      },
      total_merah: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      total_biru: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      keterangan: {
        allowNull: true,
        type: Sequelize.STRING
      },
      id_pemenang: {
        allowNull: true,
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
    await queryInterface.dropTable('jadwal_tanding');
  }
};