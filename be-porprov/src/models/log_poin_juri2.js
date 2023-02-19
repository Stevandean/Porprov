'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_poin_juri2 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  log_poin_juri2.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_poin: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_juri: {
      allowNull: false,
      type: DataTypes.UUID
    },
    sudut: {
      type: DataTypes.ENUM('biru','merah'),
    },
    poin: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    masuk: {
      type: DataTypes.BOOLEAN,
    },
    cek_start: DataTypes.DATE,
    cek_end: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'log_poin_juri2',
    tableName: 'log_poin_juri2'
  });
  return log_poin_juri2;
};