'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_jadwal_tanding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.jadwal_tanding,{
        foreignKey:"id_jadwal",
        as:"jadwal"
      })
      this.belongsTo(models.nilai_tanding,{
        foreignKey:"id_nilai_merah",
        as:"nilai_merah"
      })
      this.belongsTo(models.nilai_tanding,{
        foreignKey:"id_nilai_biru",
        as:"nilai_biru"
      })
    }
  }
  detail_jadwal_tanding.init({
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
    babak: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_nilai_merah: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_nilai_biru: {
      allowNull: false,
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'detail_jadwal_tanding',
    tableName: 'detail_jadwal_tanding'
  });
  return detail_jadwal_tanding;
};