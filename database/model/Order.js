const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbconfig");

class Order extends Model {}

Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      numberOrder: DataTypes.INTEGER,
      state: DataTypes.ENUM('Abierta', 'Cancelada', 'Cerrada', 'Pagada')
    },
    {
      sequelize,
      modelName: "order",
      freezeTableName: true,
    }
  );
  
  module.exports = Order;