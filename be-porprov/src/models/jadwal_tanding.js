'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jadwal_tanding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.peserta_tanding,{
        foreignKey: "id_biru",
        as: "biru"
      })
      this.belongsTo(models.peserta_tanding,{
        foreignKey: "id_merah",
        as: "merah"
      })
      this.belongsTo(models.peserta_tanding,{
        foreignKey: "id_pemenang",
        as: "pemenang"
      })
    }
  }
  jadwal_tanding.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    babak: DataTypes.STRING,
    partai: DataTypes.INTEGER,
    gelanggang: DataTypes.STRING,
    kelas: DataTypes.STRING,
    jk: {
      type: DataTypes.ENUM('PUTRA','PUTRI'),
      allowNull: false
    },
    golongan: DataTypes.STRING,
    id_merah: {
      allowNull: true,
      type: DataTypes.UUID
    },
    id_biru: {
      allowNull: false,
      type: DataTypes.UUID
    },
    total_merah:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    total_biru:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    keterangan: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    selesai:{
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }, 
    aktif: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
  }, {
    sequelize,
    modelName: 'jadwal_tanding',
    tableName: 'jadwal_tanding'
  });
  return jadwal_tanding;
};