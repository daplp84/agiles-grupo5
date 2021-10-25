const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "user",
        freezeTableName: true,
    }
);
module.exports = User;