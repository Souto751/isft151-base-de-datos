const Sequelize = require('sequelize');

// Crear el archivo const.js con los campos USER, PASSWORD Y DATABASE, para acceder a la base de datos.
const {DATABASE, USER, PASSWORD} = require('./const');

const UserModel = require('./model');

// Inicializo Sequelize
const sequelize = new Sequelize(
    DATABASE,
    USER,
    PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false}).then(() => {
    console.log('Tablas sincronizadas');
});


module.exports = {
    User
};