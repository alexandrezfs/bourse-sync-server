/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('produits_achetes', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        auteur: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        editeur: {
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
        achesp: {
            type: 'DOUBLE',
            allowNull: false,
        },
        achech: {
            type: 'DOUBLE',
            allowNull: false,
        },
        vente: {
            type: 'DOUBLE',
            allowNull: false,
        },
        purchaser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        validated: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        lotID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
