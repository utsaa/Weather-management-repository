const sequelize = require('../config/db');
const Weather = require('./weatherModel');

// Sync all models with the database
const initModels = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established');
    await sequelize.sync({ alter: true }); // Automatically create or update tables
    console.log('All models synchronized');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};

module.exports = { sequelize, Weather, initModels };
