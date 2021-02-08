//const { BLOB } = require('sequelize');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },


  // author admin etc. 
  userType: Sequelize.INTEGER,
  authorLevel: Sequelize.INTEGER,

  //attributes
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  handle: Sequelize.STRING,
  email: Sequelize.STRING,
  coverphoto: Sequelize.BLOB,
  profilephoto: Sequelize.BLOB,
  websiteurl: Sequelize.STRING,
  passwordtemp: Sequelize.STRING,
  emailtemp:Sequelize.STRING,


  //potential foriegn keys. 
  articleStackId: Sequelize.BIGINT,
  walletId: Sequelize.BIGINT
});

module.exports = User;
