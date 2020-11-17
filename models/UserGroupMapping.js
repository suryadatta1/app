const Sequelize = require('sequelize');
const db = require('../config/database');

const UserGroupMapping = db.define('usergroupmapping', {
  submodule_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  usergroup_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

UserGroupMapping.sync().then(() => {
  console.log('table created');
});
module.exports = UserGroupMapping;
