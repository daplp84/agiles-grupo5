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
        userName: DataTypes.STRING(45),
        dni: DataTypes.STRING(45),
        email: DataTypes.STRING(45),
        name: DataTypes.STRING(45),
        dateBirth: DataTypes.STRING(45),
        dateCreated: DataTypes.DATEONLY,
    },
    {
        sequelize,
        modelName: "user",
        freezeTableName: true,
    }
);
module.exports = User;