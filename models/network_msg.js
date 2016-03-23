/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('network_msg', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        msg: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        datesent: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
