/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ia_emails', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
