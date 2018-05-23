const Sequelize = require('sequelize');

module.exports = new Sequelize({
  host: '1.1.1.1',
  database: 'db_name',
  port: '3306',
  username: 'username',
  password: 'password',
  dialect: 'mysql'
});
