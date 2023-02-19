'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timer_seni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  timer_seni.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: DataTypes.UUID,
    id_peserta: DataTypes.UUID,
    running: DataTypes.BOOLEAN,
    start: DataTypes.DATE,
    finish: DataTypes.DATE,
    selesai: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'timer_seni',
    tableName: 'timer_seni'
  });
  return timer_seni;
};