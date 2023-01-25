'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peserta_seni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.jadwal_tgr,{
        foreignKey: "id",
        as: "jadwal"
      })
    }
  }
  peserta_seni.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    kategori: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gelanggang: DataTypes.STRING,
    pool: DataTypes.STRING,
    jk: {
      type: DataTypes.ENUM('PUTRA','PUTRI'),
      allowNull: false
    },
    kelas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama1: DataTypes.STRING,
    nama2: DataTypes.STRING,
    nama3: DataTypes.STRING,
    kontingen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gugur: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }, 
  }, {
    sequelize,
    modelName: 'peserta_seni',
    tableName: 'peserta_seni',
  });
  return peserta_seni;
};