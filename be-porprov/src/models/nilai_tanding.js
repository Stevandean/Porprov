'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nilai_tanding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.log_poin_masuk,{
        foreignKey: "id_nilai_tanding",
        as: "log_poin_masuk"
      })
      this.hasMany(models.log_jatuhan,{
        foreignKey: "id_nilai_tanding",
        as: "log_jatuhan"
      })
      this.hasMany(models.log_binaan,{
        foreignKey: "id_nilai_tanding",
        as: "log_binaan"
      })
      this.hasMany(models.log_teguran,{
        foreignKey: "id_nilai_tanding",
        as: "log_teguran"
      })
      this.hasMany(models.log_poin_juri,{
        foreignKey: "id_nilai_tanding",
        as: "log_juri"
      })

      this.hasMany(models.log_poin_juri,{
        foreignKey: "id_nilai_tanding",
        as: "log_juri1"
      })
      this.hasMany(models.log_poin_juri,{
        foreignKey: "id_nilai_tanding",
        as: "log_juri2"
      })
      this.hasMany(models.log_poin_juri,{
        foreignKey: "id_nilai_tanding",
        as: "log_juri3"
      })
    }
  }
  nilai_tanding.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    poin_masuk: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    jatuhan: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    total_hukum: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    total_poin: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // dis: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: 0
    // }
  }, {
    sequelize,
    modelName: 'nilai_tanding',
    tableName: 'nilai_tanding'
  });
  return nilai_tanding;
};