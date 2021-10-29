const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class Order {}

Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      numberOrder: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      state: DataTypes.ENUM('Abierta', 'Cancelada', 'Cerrada', 'Pagada'),
      dateCreated: DataTypes.DATE,
      dateUpdated: DataTypes.DATE,
      barId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
      freezeTableName: true,
    }
  );
  
  module.exports = Order;