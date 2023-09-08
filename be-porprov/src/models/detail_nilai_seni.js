'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_nilai_seni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail_nilai_seni.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    hukuman: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    Kebenaran: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    waktu: DataTypes.STRING,
    median: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    deviasi: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    skor_akhir: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    selesai: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'detail_nilai_seni',
    tableName: 'detail_nilai_seni',
  });
  return detail_nilai_seni;
};