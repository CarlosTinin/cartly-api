const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/database')[env];
const db = require('../models');

const connection = new Sequelize(dbConfig);

module.exports = connection;