'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class timer_tanding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.log_pause_tanding,{
        foreignKey: "id_timer_tanding",
        as: "log_pause"
      })
    }
  }
  timer_tanding.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: DataTypes.UUID,
    babak: DataTypes.STRING,
    running: DataTypes.BOOLEAN,
    start: DataTypes.DATE,
    total_pause: DataTypes.INTEGER,
    finish: DataTypes.DATE,
    selesai: DataTypes.BOOLEAN,
    saved_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'timer_tanding',
    tableName: 'timer_tanding'
  });
  return timer_tanding;
};