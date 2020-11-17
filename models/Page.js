const Sequelize = require('sequelize');
const db = require('../config/database');

const Page = db.define('page', {
  submodule_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  page_url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
});

Page.sync().then(() => {
  console.log('table created');
});
module.exports = Page;
