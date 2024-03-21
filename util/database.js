const Sequelize = require('sequelize');


const sequelize = new Sequelize("e-commerce", 'root', '@Farruh0911', {
  dialect:'mysql',
  host:'localhost'
});


module.exports = sequelize;


// const pool = mysql.createPool( {
//   host:"localhost",
//   user:'root',
//   password:'@Farruh0911',
//   database:'e-commerce'
// });
//
//
// module.exports = pool.promise();