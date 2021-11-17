const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class Item extends Model {}

Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      state: DataTypes.ENUM('Iniciado', 'EnPreparacion', 'Listo', 'Entregado'),
      comments: DataTypes.STRING(150)
    },
    {
      sequelize,
      modelName: "item",
      freezeTableName: true,
    }
  );
  
  module.exports = Item;