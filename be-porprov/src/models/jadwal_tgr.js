'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jadwal_tgr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.nilai_tunggal,{
        foreignKey : "id_jadwal",
        as: "nilai_tunggal"
      })
      this.hasMany(models.nilai_ganda,{
        foreignKey: "id_jadwal",
        as: "nilai_ganda"
      })
      this.hasMany(models.nilai_regu,{
        foreignKey: "id_jadwal",
        as: "nilai_regu"
      })
      this.hasMany(models.skor,{
        foreignKey: "id_jadwal",
        as: "skor"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_biru",
        as: "biru"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_merah",
        as: "merah"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_pemenang",
        as: "pemenang"
      })
      this.belongsTo(models.skor,{
        foreignKey: "id_skor_merah",
        as: "skor_merah"
      })
      this.belongsTo(models.skor,{
        foreignKey: "id_skor_biru",
        as: "skor_biru"
      })
    }
  }
  jadwal_tgr.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    gelanggang: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }, 
    partai: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }, 
    id_biru: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_merah: {
      allowNull: true,
      type: DataTypes.UUID
    },
    kategori: DataTypes.STRING,
    jk: DataTypes.STRING,
    kelas: DataTypes.ENUM('PUTRI', 'PUTRI'),
    babak: DataTypes.STRING,  
    selesai:{
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }, 
    aktif: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    id_pemenang: DataTypes.UUID,
    id_skor_merah: DataTypes.UUID,
    id_skor_biru: DataTypes.UUID,      
  }, {
    sequelize,
    modelName: 'jadwal_tgr',
    tableName: 'jadwal_tgr'
  });
  return jadwal_tgr;
};