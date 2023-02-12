'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gelanggang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gelanggang.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    gelanggang: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gelanggang',
    tableName: 'gelanggang'
  });
  return gelanggang;
};