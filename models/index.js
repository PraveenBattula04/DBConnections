const mongoose = require('mongoose');

function dbConnection () {
    try {
        mongoose.connect('mongodb://localhost:27017/dbConnections');
        console.log('mongoose db connected')
      } catch (error) {
        console.log('mongoose db connection error');
      }
} 
module.exports = {
    dbConnection
}