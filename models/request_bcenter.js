/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('request_bcenter', { 
    host_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
      freezeTableName: true,
      timestamps: false
  });
};
