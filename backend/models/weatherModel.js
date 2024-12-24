const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/db');

const Weather = sequelize.define("Weather", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    long:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new DATE()
    }
  });

module.exports = Weather;