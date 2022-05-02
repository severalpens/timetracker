require('dotenv').config();
const Sequelize = require('sequelize');

const host=process.env.server;
const database=process.env.database;
const username=process.env.user;
const password=process.env.password;

const options = {
    dialect: 'mssql',
    host
}

const sequelize = new Sequelize(database, username, password,options);

sequelize
  .authenticate()
  .then(() => {
    
    console.info('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
