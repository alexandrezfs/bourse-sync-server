/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('alive', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        localisation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: 'DOUBLE',
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
