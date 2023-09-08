'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nama: DataTypes.STRING,
    password: DataTypes.STRING,
    aktif: DataTypes.BOOLEAN,
    logo: DataTypes.STRING,
    icon1: DataTypes.STRING,
    icon2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
    tableName: 'event'
  });
  return event;
};