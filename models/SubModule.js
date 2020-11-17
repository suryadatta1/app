const Sequelize = require('sequelize');
const db = require('../config/database');

const SubModule = db.define('submodule', {
  module_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  usergroup_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

SubModule.sync().then(() => {
  console.log('table created');
});
module.exports = SubModule;
