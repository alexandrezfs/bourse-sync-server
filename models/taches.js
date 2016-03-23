/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taches', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fait: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true,
      timestamps: false
  });
};
