'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_teguran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  log_teguran.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_poin: {
      allowNull: false,
      type: DataTypes.UUID
    },
    poin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'log_teguran',
    tableName: 'log_teguran'
  });
  return log_teguran;
};