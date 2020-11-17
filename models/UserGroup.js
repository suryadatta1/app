const Sequelize = require('sequelize');
const db = require('../config/database');

const UserGroup = db.define('usergroup', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

UserGroup.sync().then(() => {
  console.log('table created');
});
module.exports = UserGroup;
