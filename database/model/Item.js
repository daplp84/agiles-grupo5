const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class Item {}

Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: DataTypes.INTEGER,
      unitPrice: DataTypes.DOUBLE,
      state: DataTypes.ENUM('Iniciado', 'EnPreparacion', 'Listo', 'Entregado'),
      comments: DataTypes.STRING(150),
      dateCreated: DataTypes.DATE,
      dateUpdated: DataTypes.DATE,
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "item",
      freezeTableName: true,
    }
  );
  
  module.exports = Item;