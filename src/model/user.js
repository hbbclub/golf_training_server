const Sequelize = require('sequelize');
const db = require('../conf/db');

module.exports = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mobile: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
});
