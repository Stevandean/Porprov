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
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    event_id: DataTypes.UUID,
    kelas: DataTypes.STRING,
    jk: {
      type: DataTypes.ENUM('PUTRA','PUTRI'),
      allowNull: false
    },
    golongan: DataTypes.STRING,
    nama: DataTypes.STRING,
    kontingen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peserta_tanding',
    tableName: 'peserta_tanding',
  });
  return peserta_tanding;
};