import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;


// TODO : CLEAN DUMMY CODE

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');


// Setting up dummy code for demonstration of database


//may need to use this to set up database
const path = require('path');

//set up express web server back end

const express = require('express');
const bodyParser = require('body-parser');
//const cors = require("cors");


// Set up appropriate models and controllers here 

//const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const User = require('./models/user');

const Article = require('./models/articles');

const app = express();

//test db calls delete and modify later

// const db = require("./app/models");
// db.sequelize.sync();



// may need below to drop and resync existing table

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// cors # express middle ware to provide and enable cors with options
// define express appp, then add bodyparser and corse using app.use 
// define and set origin to localHost 8081??
// define get route for testing and listen on 8080


app.set('view engine', 'ejs');
app.set('views', 'views');

// modify routes if necessary 

//const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



//cor? 
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });



// find user # default test always one. and asigns

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

//app.use('/admin', adminRoutes);
//app.use(shopRoutes);

//app.use(errorController.get404);


// try to define db definitions here for set up. 

Article.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
//User.hasMany(Product);
User.hasMany(Article);

//make dummy user. 
// I need to use unused vars here for code to work. 
// Eslint edit


/* eslint-disable no-unused-vars */

sequelize
  .sync({ force: true })
  //.sync()
  .then(result => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return User.create({ firstname: 'Billy', lastname: 'Sanders', email: 'test@test.com', handle: '@bsboi' });
    }
    return user;
  })
  .then(user => {
    // console.log(user);
   // return user.createCart();
  })
  //.then(cart => {
    //app.listen(3000);
  //})
  .catch(err => {
    console.log(err);
  });

//unused vars end ...

/* eslint-enable no-unused-vars */


// Mark Help : this creates a vue object. Thus not an app. ??

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: (h) => h(App),
// }).$mount('#app');
