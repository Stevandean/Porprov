'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peringatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  peringatan.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: DataTypes.UUID,
    babak: DataTypes.STRING,
    sudut: DataTypes.STRING,
    poin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peringatan',
    tableName: 'peringatan'
  });
  return peringatan;
};