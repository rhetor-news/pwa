


// currently does not recognize this 
//import { sequelize as sql } from "../../node_modules/sequelize";


// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;\\

// Had to convert from commonjs to es6 file. Idk if it will work. 
// Previous code 
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('node-complete', 'root', 'lqtm5692', {dialect: 'mysql',host: 'localhost' });

// module.exports = sequelize; 

// new code below. 
import Sequelize from 'sequelize';

const sequelize = new Sequelize('node-dbtest', 'root', 'lqtm5692', {dialect: 'mysql',host: 'localhost' });

export default sequelize; 