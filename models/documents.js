/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('documents', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filelink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
