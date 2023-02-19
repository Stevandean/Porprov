'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nilai_tanding extends Model {
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
      this.belongsTo(models.poin,{
        foreignKey:"id_poin_merah",
        as:"poin_merah"
      })
      this.belongsTo(models.poin,{
        foreignKey:"id_poin_biru",
        as:"poin_biru"
      })
    }
  }
  nilai_tanding.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: {
      allowNull: false,
      type: DataTypes.UUID
    },
    babak: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_poin_merah: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_poin_biru: {
      allowNull: false,
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'nilai_tanding',
    tableName: 'nilai_tanding'
  });
  return nilai_tanding;
};