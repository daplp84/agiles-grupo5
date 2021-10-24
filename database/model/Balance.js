const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class Balance extends Model {}

Balance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            notEmpty: true,
            validate: {
                min: 0.0
            }
        }
    },
    {
        sequelize,
        modelName: "balance",
        freezeTableName: true,
    }
);
module.exports = Balance;