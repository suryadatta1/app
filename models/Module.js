const Sequelize = require('sequelize');
const db = require('../config/database');

const Module = db.define('module', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});

Module.sync().then(() => {
  console.log('table created');
});
module.exports = Module;
