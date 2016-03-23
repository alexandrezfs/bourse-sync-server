/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('reassorts', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        id_produit_encaisse: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        restant: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pris: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heure: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
