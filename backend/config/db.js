const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('utsa', 'postgres', 'postgres', {
    host: process.env.LOCAL_HOST || 'localhost',
    dialect: 'postgres',
    logging: false // Disable SQL query logging for a cleaner console
  });

module.exports = sequelize;