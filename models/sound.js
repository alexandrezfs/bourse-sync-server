/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sound', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activated: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true,
      timestamps: false
  });
};
