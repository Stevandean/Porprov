'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nilai_regu extends Model {
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
      this.belongsTo(models.juri,{
        foreignKey: "id_juri",
        as: "juri",
      })
    }
  }
  nilai_regu.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    id_jadwal: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_peserta: {
      allowNull: false,
      type: DataTypes.UUID
    },
    id_juri: {
      allowNull: false,
      type: DataTypes.UUID
    },
    nama_juri: DataTypes.STRING,
    jurus1: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus2: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus3: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus4: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus5: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus6: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus7: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus8: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus9: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus10: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus11: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    jurus12: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    skor_a: {
      type: DataTypes.FLOAT,
      defaultValue: 9.90
    },
    skor_b: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    total_skor: {
      type: DataTypes.FLOAT,
      defaultValue: 9.90
    },
    dis: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }, 
  }, {
    sequelize,
    modelName: 'nilai_regu',
    tableName: 'nilai_regu'
  });
  return nilai_regu;
};