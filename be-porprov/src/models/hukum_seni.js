'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hukum_tgr extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.jadwal_seni,{
        foreignKey: "id_jadwal",
        as: "jadwal"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_peserta",
        as: "peserta",
      })
    }
  }
  hukum_tgr.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    id_jadwal: {
      type: DataTypes.UUID
    },
    id_peserta: {
      type: DataTypes.UUID
    },
    hukum1: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    hukum2: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    hukum3: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    hukum4: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    hukum5: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    hukum6: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'hukum_seni',
    tableName: 'hukum_seni'
  });
  return hukum_tgr;
};