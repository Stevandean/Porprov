'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nilai_ganda extends Model {
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
        as: "peserta",
      })
      this.belongsTo(models.juri,{
        foreignKey: "id_juri",
        as: "juri",
      })
    }
  }
  nilai_ganda.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_peserta: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_juri: {
      allowNull: false,
      type: DataTypes.UUID
    },
    nama_juri: DataTypes.STRING,
    technique: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    firmness: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    soulfulness: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    total: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    total_skor: {
      type: DataTypes.DOUBLE,
      defaultValue: 9.10
    },
    dis: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }, 
  }, {
    sequelize,
    modelName: 'nilai_ganda',
    tableName: 'nilai_ganda'
  });
  return nilai_ganda;
};