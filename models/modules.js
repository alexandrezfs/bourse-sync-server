/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('modules', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        module_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
};
