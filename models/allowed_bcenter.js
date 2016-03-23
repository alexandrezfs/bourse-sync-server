/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('allowed_bcenter', {
        host_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        allowed: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
