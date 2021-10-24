
const Balance = require('./model/Balance');
const User = require('./model/User');

Balance.belongsTo(User);
