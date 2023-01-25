'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.jadwal_tgr,{
        foreignKey: "id_jadwal",
        as: "jadwal"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_peserta",
        as: "peserta"
      })
    }
  }
  skor.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: DataTypes.UUID,
    id_peserta: DataTypes.UUID,
    waktu: DataTypes.STRING,
    median: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    skor_akhir: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    deviasi: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    selesai: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'skor',
    tableName: 'skor',
  });
  return skor;
};