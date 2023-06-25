'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nilai_solo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.jadwal_seni,{
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
  nilai_solo.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    firmness: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    soulfulness: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    total_skor: {
      type: DataTypes.FLOAT,
      defaultValue: 9.10
    },
    dis: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }, 
  }, {
    sequelize,
    modelName: 'nilai_solo',
    tableName: 'nilai_solo'
  });
  return nilai_solo;
};