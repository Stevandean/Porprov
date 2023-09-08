'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jadwal_seni extends Model {
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
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_peserta_biru",
        as: "biru"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_peserta_merah",
        as: "merah"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_pemenang",
        as: "pemenang"
      })
      this.belongsTo(models.detail_nilai_seni,{
        foreignKey: "id_nilai_biru",
        as: "nilai_biru"
      })
      this.belongsTo(models.detail_nilai_seni,{
        foreignKey: "id_nilai_merah",
        as: "nilai_merah"
      })
      this.belongsTo(models.gelanggang,{
        foreignKey: "gelanggang_id",
        as: "gelanggang"
      })
    }
  }
  jadwal_seni.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    event_id: {
      type: DataTypes.INTEGER,
    }, 
    gelanggang_id: {
      type: DataTypes.INTEGER,
    }, 
    partai: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }, 
    id_peserta_biru: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_peserta_merah: {
      allowNull: true,
      type: DataTypes.UUID
    },
    kategori: DataTypes.STRING,
    jk: DataTypes.ENUM('PUTRI', 'PUTRI'),
    golongan: DataTypes.STRING,
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
    id_nilai_biru: DataTypes.UUID,
    id_nilai_merah: DataTypes.UUID,      
  }, {
    sequelize,
    modelName: 'jadwal_seni',
    tableName: 'jadwal_seni'
  });
  return jadwal_seni;
};