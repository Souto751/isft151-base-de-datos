const mysql = require('mysql');

// Crear el archivo const.js con los campos USER, PASSWORD Y DATABASE, para acceder a la base de datos.
const {USER, PASSWORD} = require('./const');

// Creo y conecto base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: USER,
    password: PASSWORD
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected');
    db.query('CREATE DATABASE IF NOT EXISTS ormbd;', (err, result) => {
        if (err) throw err;
        console.log('DB created');
    });
});
