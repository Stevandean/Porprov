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
      this.belongsTo(models.jadwal_tgr,{
        foreignKey: "id_jadwal",
        attributes:{
          exclude:['createdAt','updatedAt']
        },
        as: "jadwal"
      })
      this.belongsTo(models.peserta_seni,{
        foreignKey: "id_peserta",
        as: "peserta",
        attributes:{
          exclude:['createdAt','updatedAt']
        },
      })
    }
  }
  hukum_tgr.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    id_jadwal: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_peserta: {
      allowNull: false,
      type: DataTypes.UUID
    },
    hukum1: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    hukum2: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    hukum3: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    hukum4: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    hukum5: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    hukum6: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    total: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'hukum_tgr',
    tableName: 'hukum_tgr'
  });
  return hukum_tgr;
};