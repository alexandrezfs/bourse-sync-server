/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('recap_global', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        magasin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        chiffre_journee: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reafait: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
