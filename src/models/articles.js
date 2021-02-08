// currently a test model for database and git. 
// const Sequelize = require('sequelize');

// const sequelize = require('../util/database')
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
//make a belongs to relationship with user. 


const Articles = sequelize.define('articles', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  genre: Sequelize.STRING,
  author: Sequelize.STRING,
  
  //foriegn key. 
  authorId: Sequelize.STRING,
  
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },

  text: {
    type: Sequelize.TEXT,
    //allowNull: false
  },

  //optomize later? 
  picture: {
      type: Sequelize.BLOB
  },
  geolocation: Sequelize.BLOB,
  numoflikes: Sequelize.INTEGER,
  numofreshares: Sequelize.INTEGER,
  date: Sequelize.DATE,
  
  
  
  datepublishrequest: Sequelize.DATE,
  publishexpire: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
  // Allow all articles made to be published for now 

   
  publish: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},

  //Need to investigate how to load a bunch of cited sources
  
  //citedsources: Sequelize.

  // investigate, comments table, reshare table, state of publication

  blurb: Sequelize.TEXT
});

module.exports = Articles;

