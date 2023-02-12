'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_poin_juri1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.poin,{
        foreignKey: 'id_poin',
        as: 'juri1'
      })
    }
  }
  log_poin_juri1.init({
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
    poin: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    masuk: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    sequelize,
    modelName: 'log_poin_juri1',
    tableName: 'log_poin_juri1'
  });
  return log_poin_juri1;
};