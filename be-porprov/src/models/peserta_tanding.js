'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peserta_tanding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  peserta_tanding.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    kelas: DataTypes.STRING,
    jk: {
      type: DataTypes.ENUM('PUTRA','PUTRI'),
      allowNull: false
    },
    golongan: DataTypes.STRING,
    nama: DataTypes.STRING,
    kontingen: DataTypes.STRING,
    kota: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    tinggi_badan: DataTypes.INTEGER,
    berat_badan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'peserta_tanding',
    tableName: 'peserta_tanding',
  });
  return peserta_tanding;
};