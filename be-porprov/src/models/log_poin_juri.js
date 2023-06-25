'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log_poin_juri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.nilai_tanding,{
        foreignKey: "id_nilai_tanding",
        as: "log juri"
      })
    }
  }
  log_poin_juri.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    id_nilai_tanding: {
      allowNull: false,
      type: DataTypes.UUID
    },
    juri: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    poin: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sudut: {
      type: DataTypes.ENUM('biru','merah'),
    },
    masuk: {
      type: DataTypes.BOOLEAN,
    },
    cek_start: DataTypes.DATE,
    cek_end: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'log_poin_juri',
    tableName: 'log_poin_juri'
  });
  return log_poin_juri;
};