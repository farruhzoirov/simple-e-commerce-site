const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://fzoirov29:9hbVYteBL35W9vu5@cluster0.yycvn5d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      .then((client) => {
        console.log('Connected!');
        _db = client.db();
        callback();
      })
      .catch((err) => {
        console.log(err)
      });
}

const getDb = () => {
  try {
    if (_db) {
      return _db;
    }
  } catch (e) {
    console.log(e)
  }
}
module.exports = {
  mongoConnect,
  getDb
};