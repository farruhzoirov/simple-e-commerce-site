const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());

// const sequelize = require('./util/database');
const mongoConnect = require('./util/db-mongo').mongoConnect;
const Users = require('./models/user');

app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  Users.findById('65f819d97e477dab96022749')
      .then((user) => {
        console.log(req.user)
        req.user = new Users(user.name, user.email, user.cart, user._id);
        next();
      })
      .catch((err) => {
        console.log(err)
      })
})

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);


//
// sequelize.sync()
//     .then((result) => {
//       app.listen(5000);
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//


mongoConnect(() => {
  app.listen(5000)
})