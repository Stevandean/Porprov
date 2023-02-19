'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class verifikasi_juri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  verifikasi_juri.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: DataTypes.UUID,
    show: DataTypes.BOOLEAN,
    poin: DataTypes.ENUM('Jatuhan','Hukuman'),
    juri1: DataTypes.ENUM('biru', 'tidak_sah', 'merah'),
    juri2: DataTypes.ENUM('biru', 'tidak_sah', 'merah'),
    juri3: DataTypes.ENUM('biru', 'tidak_sah', 'merah')
  }, {
    sequelize,
    modelName: 'verifikasi_juri',
    tableName: 'verifikasi_juri'
  });
  return verifikasi_juri;
};