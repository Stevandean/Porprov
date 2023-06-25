'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_binaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  log_binaan.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    id_nilai_tanding: {
      allowNull: false,
      type: DataTypes.UUID
    },
    poin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'log_binaan',
    tableName: 'log_binaan'
  });
  return log_binaan;
};