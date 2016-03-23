/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('pattern_concur', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        before_pattern: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        after_pattern: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
