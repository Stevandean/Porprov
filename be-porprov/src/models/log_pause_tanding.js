'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_pause_tanding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  log_pause_tanding.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_timer_tanding: DataTypes.UUID,
    start: DataTypes.DATE,
    finish: DataTypes.DATE,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'log_pause_tanding',
    tableName: 'log_pause_tanding'
  });
  return log_pause_tanding;
};