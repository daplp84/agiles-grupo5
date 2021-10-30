const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class Bar extends Model {}

Bar.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(45),
      address: DataTypes.STRING(45),
      city: DataTypes.STRING(45),
      country: DataTypes.STRING(45),
      location: DataTypes.STRING(150),
      image: DataTypes.STRING(150),
      state: DataTypes.ENUM('Abierto', 'Cerrado')
    },
    {
      sequelize,
      modelName: "bar",
      freezeTableName: true,
    }
  );
  
  module.exports = Bar;