
const Balance = require('./model/Balance');
const Bar = require('./model/Bar');
const Item = require('./model/Item');
const Order = require('./model/Order');
const Product = require('./model/Product');
const User = require('./model/User');

Balance.belongsTo(User);

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsTo(Bar);
Bar.hasMany(Order);

Product.belongsTo(Bar);
Bar.hasMany(Product);

Item.belongsTo(Order);
Order.hasMany(Item);

Item.belongsTo(Product);
