/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('lots', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fait: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        vente: {
            type: 'DOUBLE',
            allowNull: false,
        },
        achesp: {
            type: 'DOUBLE',
            allowNull: false,
        },
        achech: {
            type: 'DOUBLE',
            allowNull: false,
        },
        purchaser: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
