const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class Product extends Model {}

Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING(45),
      description: DataTypes.STRING(45),
      price: DataTypes.DOUBLE,
      category: DataTypes.ENUM('Drinks', 'Foods', 'Desserts'),
      subcategory: DataTypes.STRING(45),
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "product",
      freezeTableName: true,
    }
  );
  
  module.exports = Product;